import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_1jAyTHnF9EYg@ep-soft-bar-av0sqryp-pooler.c-11.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

async function insertData() {
  try {
    // Ensure client connection is established
    await client.connect();

    const insertQuery = `
      INSERT INTO users (username, email, password)
      VALUES ('username2', 'user3@example.com', 'password123');
    `;

    const res = await client.query(insertQuery);

    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    // Close the client connection
    await client.end();
  }
}

insertData();