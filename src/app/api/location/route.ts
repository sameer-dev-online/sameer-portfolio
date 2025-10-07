import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const forwardedFor = request.headers.get('x-forwarded-for');
     const realIp =
    forwardedFor?.split(',')[0].trim() || // multiple IPs se first lelo
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown';
    console.log(realIp);
  const res = await fetch(`https://ipapi.co/${realIp}/json/`);
  const data = await res.json();
  return NextResponse.json({
    ip: realIp,
    country: data.country_name || "Pakistan",
    currency: data.currency || "PKR"
  });
}