// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fName, lName, reqEmail, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 2587, 
      secure: false, 
      auth: {
        user: 'AKIAU4U3VUHSXLLZSXWO',
        pass: 'BH6UY8EBuH5myvBmHj3Ybbgrm/mL+1YWZQP5aEURUnx0'//process.env.EMAIL_PASS,  Ensure EMAIL_PASS is stored as an env variable
      },
    });

    const mailOptions = {
      from: 'info@sparkeunlimited.ca',
      to: 'rmaxwell@sparkeunlimited.ca',
      subject: subject,
      html: `<p>${message}</p><p>From: ${fName} ${lName} (${reqEmail})</p>`,
    };

    // Log transporter configuration for debugging
/*     console.log('Transporter configuration:', transporter.options);
 */
    const info = await transporter.sendMail(mailOptions);
    /* console.log('Email sent successfully:', info.response); */

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log the full error for debugging
/*     console.error('Error sending email:', error);
 */    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}