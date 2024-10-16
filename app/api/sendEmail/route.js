import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Set up AWS SES client
const sesClient = new SESClient({ region: 'us-east-1' }); // replace 'your-region' with the correct AWS region

export async function POST(req, res) {
  try {
    // Parse incoming request body
    const { fName, lName, phone, reqEmail, subject, message } = await req.json();

    // Compose the email content
    const emailParams = {
      Source: 'info@sparkeunlimited.ca', // Your verified SES email
      Destination: {
        ToAddresses: ['rmaxwell@sparkeunlimited.ca'], // The recipient's email address
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission: ${subject}`,
        },
        Body: {
          Text: {
            Data: `
              Name: ${fName} ${lName}
              Phone: ${phone}
              Email: ${reqEmail}
              Message: ${message}
            `,
          },
        },
      },
    };

    // Send email
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    // Send response back to the client
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
