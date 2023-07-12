import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
const webhookSecret: string = process.env.CLERK_WEBHOOK_SECRET || "";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Event {
  data: {
    id: string;
    email_addresses: { email_address: string }[];
    created_at: number;
  };
  type: string;
}

export async function POST(req: any) {
  const payload = await req.json();
  const payloadString = JSON.stringify(payload);
  const svixId = req.headers.get("svix-id");
  const svixIdTimeStamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");
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
    console.log("Event: ", evt.data.id);
    console.log("Event: ", evt.data.email_addresses[0].email_address);
    return new Response("Success", {
      status: 200,
    });
  } catch (_) {
    console.log("error");
    return new Response("Error occured", {
      status: 400,
    });
  }
}
