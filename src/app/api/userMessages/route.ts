import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({
      success: false,
      message: "Missing required fields",
      status: 400,
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "messages@sameer-dev.online",
      to: "sameer@sameer-dev.online",
      subject: "New Contact Request from Portfolio",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: "Failed to send email",
        status: 500,
      });
    }
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
      status: 500,
    });
  }
}
