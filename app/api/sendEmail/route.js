import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const { fName, lName, reqEmail, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587, 
      secure: false, 
      auth: {
        user: 'AKIAU4U3VUHSXLLZSXWO',
        pass: 'BH6UY8EBuH5myvBmHj3Ybbgrm/mL+1YWZQP5aEURUnx0',
      },
    });

    const mailOptions = {
      from: 'info@sparkeunlimited.ca',
      to: 'rmaxwell@sparkeunlimited.ca',
      subject: subject,
      html: `<p>${message}</p><p>From: ${fName} ${lName} (${reqEmail})</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response, "res answer", res);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}