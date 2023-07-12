import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function GET() {
  return NextResponse.json(
    { Success: "You are in the wrong direction 😉" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
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
      return NextResponse.json({ error: "User created" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not created" }, { status: 500 });
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
