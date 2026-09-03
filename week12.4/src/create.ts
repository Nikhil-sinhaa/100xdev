import { Client } from 'pg';
const client = new Client({
    connectionString: "postgresql://postgres:Tanupriya%40123@localhost:5432/postgres"
});
async function createusertable(){
    await client.connect()
    const result = await client.query(
        `
        CREATE TABLE user1(
        id serial PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(40) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `
        
    )
    console.log(result);
     console.log("Table created");

}
createusertable();