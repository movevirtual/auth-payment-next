import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-11-15",
});

const stripeWebhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  if (!stripeWebhookSecret) {
    console.log("STRIPE_WEBHOOK_SECRET is not set");
    return new Response("Error occurred", {
      status: 400,
    });
  }

  let evt: Stripe.Event | null = null;

  try {
    evt = stripe.webhooks.constructEvent(
      payload,
      signature,
      stripeWebhookSecret
    );
    console.log("Successfully verified event");
    console.log("evt", evt);

    return new Response("Event type not handled", {
      status: 200,
    });
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return new Response("Error occurred", {
      status: 400,
    });
  }
}
