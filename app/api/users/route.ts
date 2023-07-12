import { Webhook } from "svix";
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
    console.log("userid: ", evt.data.id);
    console.log("email: ", evt.data.email_addresses[0].email_address);
    const eventType: EventType = evt.type as EventType;
    console.log("eventType: ", eventType);

    if (eventType === "user.created") {
      const user = await prisma.user.create({
        data: {
          userid: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
        },
      });
      console.log("user: ", user);
    }
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

type EventType = "user.created";
