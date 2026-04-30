import { NextRequest, NextResponse } from "next/server";
import { appendToAirtable, checkEmailExists } from "@/lib/airtable";

export const dynamic = "force-dynamic";

// Guards against concurrent requests for the same email on this instance.
const inFlight = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const { name, email: rawEmail, gender, pathway1, pathway2 } = await req.json();
    const email = rawEmail?.trim().toLowerCase();

    if (!name || !email || !gender || !pathway1 || !pathway2) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (inFlight.has(email)) {
      return NextResponse.json(
        { error: "This email is already registered. If you have questions, please contact us." },
        { status: 409 }
      );
    }

    inFlight.add(email);
    try {
      let alreadyRegistered = false;
      try {
        alreadyRegistered = await checkEmailExists(email);
      } catch (checkErr) {
        console.warn("Airtable duplicate check failed, skipping:", checkErr);
      }
      if (alreadyRegistered) {
        return NextResponse.json(
          { error: "This email is already registered. If you have questions, please contact us." },
          { status: 409 }
        );
      }

      await appendToAirtable({ name, email, gender, pathway1, pathway2 });
      return NextResponse.json({ ok: true });
    } finally {
      inFlight.delete(email);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Registration error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
