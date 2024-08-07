import { Client } from "pg"
import { config } from "dotenv"

config()

export async function getClient() {
  const client = new Client(process.env.POSTGRE_URL)
  await client.connect()
  return client
}
