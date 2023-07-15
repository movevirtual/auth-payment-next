import Stripe from "stripe";
import { currentUser } from "@clerk/nextjs";

export async function POST() {
  const user = await currentUser();
  if (!user) {
    return new Response("User not found", {
      status: 400,
    });
  }

  const userEmail = user.emailAddresses[0].emailAddress;
  console.log("userEmail in checkout: ", userEmail);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2022-11-15",
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    billing_address_collection: "required",
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    success_url:
      process.env.NEXT_PUBLIC_WEBSITE_URL + `?session_id={CHECKOUT_SESSION_ID}`,

    cancel_url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    customer_email: userEmail,
  });

  return new Response(JSON.stringify({ url: session.url }));
}
