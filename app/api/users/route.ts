import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { buffer } from "node:stream/consumers";
import { Webhook } from "svix";

export async function GET() {
  return NextResponse.json(
    { Success: "You are in the wrong direction 😉" },
    { status: 200 }
  );
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const secret: string | undefined = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(req: NextApiRequest) {
  const payload: any = (await buffer(req)).toString();
  const headers: any = req.headers;

  const wh: Webhook = new Webhook(secret || "");
  let event: any;
  try {
    event = wh.verify(payload, headers);
    console.log(event);
  } catch (err) {
    NextResponse.json({ Error: "Invalid webhook signature" }, { status: 400 });
  }
}
