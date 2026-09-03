import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_1jAyTHnF9EYg@ep-soft-bar-av0sqryp-pooler.c-11.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

async function insertData(
  username: string,
  email: string,
  password: string
) {
  try {
    await client.connect();
    console.log("Connected!");

    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [username, email, password];

    const result = await client.query(query, values);

    console.log("User inserted successfully:");
    console.table(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

insertData("username2", "user3@example.com", "password123");