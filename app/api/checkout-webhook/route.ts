import Stripe from "stripe";

export async function POST(req: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2022-11-15",
  });

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

  const payload = await req.json();
  console.log("payload", payload);
  const payloadString = JSON.stringify(payload);
  const stripeSignature = req.headers["stripe-signature"];
  console.log("stripeSignature", stripeSignature);

  if (!stripeSignature) {
    console.log("stripeSignature", stripeSignature);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  let evt: Stripe.Event | null = null;
  try {
    evt = stripe.webhooks.constructEvent(
      payloadString,
      stripeSignature,
      endpointSecret
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
