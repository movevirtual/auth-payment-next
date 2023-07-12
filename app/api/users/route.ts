import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
const webhookSecret: string = process.env.CLERK_WEBHOOK_SECRET || "";

export async function POST(req: any) {
  const payload = await req.json();
  const payloadString = JSON.stringify(payload);
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id") || "";
  const svixIdTimeStamp = headerPayload.get("svix-timestamp") || "";
  const svixSignature = headerPayload.get("svix-signature") || "";
  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    console.log("svixId", svixId);
    console.log("svixIdTimeStamp", svixIdTimeStamp);
    console.log("svixSignature", svixSignature);
    return new Response("Error occured", {
      status: 400,
    });
  }
  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;
  try {
    evt = wh.verify(payloadString, svixHeaders) as Event;
    console.log("Successfully verified event");
    console.log("Event: ", evt);
  } catch (_) {
    console.log("error");
    return new Response("Error occured", {
      status: 400,
    });
  }
}
