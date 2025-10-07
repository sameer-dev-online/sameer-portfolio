import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const forwardedFor = request.headers.get('x-forwarded-for');
     const realIp =
    forwardedFor?.split(',')[0].trim() || // multiple IPs se first lelo
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown';
    // console.log(realIp);
  const res = await fetch(`https://api.ipwho.org/ip/${realIp}`);
  const data = await res.json();
  // console.log(data);
   return NextResponse.json({
    ip:   data?.data?.ip || realIp,
    country: data?.data?.country || "Pakistan",
    city: data?.data?.city || "Unknown",
    currency: data?.data?.currency?.code || "PKR",
  });
}