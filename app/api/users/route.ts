import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { buffer } from "stream/consumers";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  return NextResponse.json(
    { Success: "You are in the wrong direction 😉" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
}
