import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "8.8.8.8"; // fallback for local dev;

  const res = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await res.json();
  return NextResponse.json({
    ip,
    country: data.country_name || "Pakistan",
    currency: data.currency || "PKR"
  });
}