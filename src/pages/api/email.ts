// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // sleep 3 secs
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(3000);
  res.status(200).json({ name: "John Doe" });
}
