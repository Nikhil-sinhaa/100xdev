import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;

  private redisClient: RedisClientType;

  // stock -> list of users subscribed to that stock
  private subscriptions: Map<string, string[]> = new Map();

  private constructor() {
    this.redisClient = createClient();

    this.redisClient
      .connect()
      .then(() => {
        console.log("Connected to Redis");
      })
      .catch((err) => {
        console.error("Error connecting to Redis:", err);
      });
  }

  // Singleton
  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }

    return PubSubManager.instance;
  }

  // User subscribes to a stock
  public userSubscribe(userId: string, stock: string) {
    // If stock doesn't exist, create an empty user list
    if (!this.subscriptions.has(stock)) {
      this.subscriptions.set(stock, []);
    }

    // Add user to the stock's subscriber list
    this.subscriptions.get(stock)!.push(userId);

    console.log(`${userId} subscribed to ${stock}`);

    // Subscribe to Redis only for the first user
    if (this.subscriptions.get(stock)!.length === 1) {
      this.redisClient.subscribe(stock, (message) => {
        this.handleMessage(stock, message);
      });

      console.log(`Subscribed to Redis channel: ${stock}`);
    }
  }

  // User unsubscribes from a stock
  public userUnsubscribe(userId: string, stock: string) {
    const users = this.subscriptions.get(stock) || [];

    // Remove user
    const updatedUsers = users.filter((id) => id !== userId);

    // Update subscription list
    this.subscriptions.set(stock, updatedUsers);

    console.log(`${userId} unsubscribed from ${stock}`);

    // If nobody is subscribed, unsubscribe from Redis
    if (updatedUsers.length === 0) {
      this.subscriptions.delete(stock);

      this.redisClient.unsubscribe(stock);

      console.log(`Unsubscribed from Redis channel: ${stock}`);
    }
  }

  // Handle message received from Redis
  private handleMessage(stock: string, message: string) {
    console.log(`Received message for ${stock}: ${message}`);

    const users = this.subscriptions.get(stock) || [];

    // Send message to every user subscribed to this stock
    users.forEach((userId) => {
      console.log(`Sending ${stock} update to user: ${userId}`);

      // TODO:
      // Send message to user's WebSocket
      //
      // Example:
      // const socket = userSockets.get(userId);
      // socket?.send(message);
    });
  }
}

// Export singleton instance
export const pubSubManager = PubSubManager.getInstance();
