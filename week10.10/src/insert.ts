async function insertData() {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected to PostgreSQL");

    // SQL query
    const insertQuery = `
      INSERT INTO users (username, email, password)
      VALUES ('username2', 'user3@example.com', 'password123');
    `;

    // Execute query
    const res = await client.query(insertQuery);

    console.log("Insertion successful!");
    console.log(res);
  } catch (err) {
    console.error("Error during insertion:", err);
  } finally {
    // Close connection
    await client.end();
    console.log("Connection closed.");
  }
}

insertData();