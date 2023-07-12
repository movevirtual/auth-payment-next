import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export const runtime = "nodejs";

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
  const payload: any = await req.body;
  const headers: any = req.headers;
  console.log(payload);
  console.log(headers);
  const wh: Webhook = new Webhook(secret || "");
  let event: any;
  try {
    event = wh.verify(payload, headers);
    console.log(event);
  } catch (err) {
    NextResponse.json({ Error: "Invalid webhook signature" }, { status: 400 });
  }
}
