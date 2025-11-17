import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("MONGODB_URI no está definida en las variables de entorno");
}

if (!dbName) {
  throw new Error("MONGODB_DB no está definida en las variables de entorno");
}

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  if (client) return client;

  if (!clientPromise) {
    clientPromise = MongoClient.connect(uri as string);
  }

  client = await clientPromise;
  return client;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(dbName);
}
