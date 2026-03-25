import { NextRequest, NextResponse } from "next/server";
import { appendToAirtable } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, gender } = await req.json();

    if (!name || !email || !gender) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await appendToAirtable({ name, email, gender, status: "Pending Payment" });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Registration error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
