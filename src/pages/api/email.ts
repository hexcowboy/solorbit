// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  client.query("INSERT INTO emails (email) VALUES ($1)", [email], (err) => {
    if (err) {
      if (
        (err.message = `duplicate key value violates unique constraint "emails_email_key"`)
      ) {
        res.status(200).json({ message: "Email already added" });
        return;
      }

      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: "Email added" });
    }
  });
}
