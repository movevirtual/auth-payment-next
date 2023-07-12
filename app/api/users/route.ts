import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
const webhookSecret: string = process.env.CLERK_WEBHOOK_SECRET || "";

export async function POST(req: any) {
  const headers = req.headers;
  console.log(headers);
}
