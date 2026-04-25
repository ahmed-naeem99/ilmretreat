interface RegistrationRow {
  name: string;
  email: string;
  gender: string;
  pathway1: string;
  pathway2: string;
}

export async function checkEmailExists(email: string): Promise<boolean> {
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Registrations";
  const apiKey = process.env.AIRTABLE_API_KEY!;

  const safeEmail = email.replace(/"/g, "");
  const formula = encodeURIComponent(`LOWER({Email})=LOWER("${safeEmail}")`);

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?filterByFormula=${formula}&maxRecords=1`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );

  if (!res.ok) return false;
  const data = await res.json();
  return (data.records ?? []).length > 0;
}

export async function appendToAirtable(row: RegistrationRow) {
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Registrations";
  const apiKey = process.env.AIRTABLE_API_KEY!;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: row.name,
          Email: row.email,
          Gender: row.gender,
          "Session 1": row.pathway1,
          "Session 2": row.pathway2,
          Status: "Pending Payment",
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable error: ${err}`);
  }

  return res.json();
}
