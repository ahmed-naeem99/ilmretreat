import { NextRequest, NextResponse } from "next/server";
import { appendToAirtable } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, gender } = await req.json();

    if (!name || !email || !gender) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await appendToAirtable({
      name,
      email,
      gender,
      paidAt: "",
      status: "Pending Payment",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
