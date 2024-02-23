import { JSONFilePreset } from "lowdb/node";

// DatabaseSchema is the type describing the database schema.
type DatabaseSchema = {
  candies: number;
};

const db = await JSONFilePreset<DatabaseSchema>("db.json", {
  candies: 0,
});

export default db;
