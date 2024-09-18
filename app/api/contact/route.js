import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextResponse } from 'next/server';
import { secret } from '@aws-amplify/backend';

// Set credentials from environment variables
const creds = {
    accessKeyId: secret("secret_id"),
    secretAccessKey: secret("secret_key"),
};

// Initialize SES client
const sesClient = new SESClient({ 
    region: 'us-east-1', 
    credentials: creds 
});

// Define the handler for POST requests
export async function POST(req) {
    try {
        // Parse the request body as JSON
        const { values } = await req.json();

        const htmlEmailBody = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #0056b3;">New Contact Request</h2>
                <p><strong>First Name:</strong> ${values.fName}</p>
                <p><strong>Last Name:</strong> ${values.lName}</p>
                <p><strong>Phone Number:</strong> ${values.phone}</p>
                <p><strong>Email:</strong> ${values.reqEmail}</p>
                <p><strong>Subject:</strong> ${values.subject}</p>
                <h3>Message:</h3>
                <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
                    ${values.message}
                </p>
                <br />
                <hr />
                <p>This message was sent from your website contact form.</p>
            </div>
        `;

        const sendEmailCommand = new SendEmailCommand({
            Destination: {
                CcAddresses: ["rmaxwell@sparkeunlimited.ca"],
                ToAddresses: ["info@sparkeunlimited.ca"],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: htmlEmailBody,
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: values.message,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: values.subject,
                },
            },
            Source: "info@sparkeunlimited.ca",
            ReplyToAddresses: [],
        });

        const response = await sesClient.send(sendEmailCommand);
        return NextResponse.json({ message: 'Email sent successfully!', response });
    } catch (err) {
        return NextResponse.json({ message: 'Internal server error', error: err.message }, { status: 500 });
    }
}
