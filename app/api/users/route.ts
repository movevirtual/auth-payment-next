import { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "svix";

export default async function handleAuthWebhookEvent(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).end(); // Method Not Allowed
    return;
  }
  const payload: any = req.body;
  console.log("Payload: " + JSON.stringify(payload));
  const headers: any = req.headers;
  console.log("Headers: " + JSON.stringify(headers));
  const secret: string | undefined = process.env.CLERK_WEBHOOK_SECRET;
  const wh: Webhook = new Webhook(secret || "");
  let event: any;
  try {
    event = wh.verify(payload, headers);
    if (event.type === "user.created") {
      const userEmailAdress: string =
        event.data.email_addresses[0].email_address;
      console.log("User created: " + userEmailAdress);
      res.status(200).send("User created");
    } else {
      res.status(200).send("User not created");
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).send("Invalid signature");
  }
}
