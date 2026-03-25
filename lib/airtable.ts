interface RegistrationRow {
  name: string;
  email: string;
  gender: string;
}

export async function appendToAirtable(row: RegistrationRow) {
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Registrations";
  const apiKey = process.env.AIRTABLE_API_KEY!;

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
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
        Status: "Pending Payment",
        "Paid at": "",
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable error: ${err}`);
  }

  return res.json();
}
