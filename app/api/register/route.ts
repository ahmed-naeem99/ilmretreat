import { NextRequest, NextResponse } from "next/server";
import { appendToAirtable, checkEmailExists } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, gender, pathway1, pathway2 } = await req.json();

    if (!name || !email || !gender || !pathway1 || !pathway2) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const alreadyRegistered = await checkEmailExists(email);
    if (alreadyRegistered) {
      return NextResponse.json(
        { error: "This email is already registered. If you have questions, please contact us." },
        { status: 409 }
      );
    }

    await appendToAirtable({ name, email, gender, pathway1, pathway2 });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Registration error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
