#! /usr/bin/env node

require('dotenv').config();
const { Client } = require("pg")

const SQL = 
`CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
 CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  brand TEXT,
  quantity INTEGER,
  category_id INTEGER,
  CONSTRAINT fk_category
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);`;

async function main(){
    const client = new Client({connectionString : process.env.DATABASE_URL});
    await client.connect();
    await client.query(SQL);
    await client.end();
}

module.exports = main;
