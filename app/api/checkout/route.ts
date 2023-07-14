import Stripe from "stripe";

export async function POST() {
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
    success_url: "http://localhost:3000/?id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000",
  });

  return new Response(JSON.stringify({ url: session.url }));
}
