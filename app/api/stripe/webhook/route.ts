import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { appendToAirtable } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
  });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const name = session.metadata?.name ?? "";
    const email = session.metadata?.email ?? session.customer_email ?? "";
    const gender = session.metadata?.gender ?? "";
    const paidAt = new Date().toISOString();

    try {
      await appendToAirtable({ name, email, gender, paidAt, status: "Paid" });
      console.log(`Registered: ${name} (${email})`);
    } catch (err) {
      console.error("Failed to write to Airtable:", err);
      // Don't return 500 — Stripe will retry. Log and move on.
    }
  }

  return NextResponse.json({ received: true });
}
