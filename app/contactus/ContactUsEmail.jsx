import { Resend } from 'resend';

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to build and send the email via Resend
async function resendEmail(htmlData, formData) {
    try {
        const response = await resend.emails.send({
            from: formData.sourceEmail,
            to: ['info@sparkeunlimited.ca'],
            subject: formData.subject,
            react: htmlData,  // Using the provided HTML data
        });

        // Check if Resend returned an error
        if (response.error) {
            throw new Error(response.error);  // Throw an error to be caught below
        }

        // Return successful response
        return { status: 'success', data: response };
    } catch (error) {
        // Handle errors and return the error message
        console.error('Error sending email:', error);
        return { status: 'error', message: error.message };
    }
}

// Function to send contact form data as an email
function contactUsEmail (formData) {
    // Build the HTML email body as a string
    const htmlEmailBody = `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #0056b3;">New Contact Request</h2>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
            <p><strong>Email:</strong> ${formData.sourceEmail}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <h3>Message:</h3>
            <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
                ${formData.textBody}
            </p>
            <br />
            <hr />
            <p>This message was sent from your website contact form.</p>
        </div>
    `;

    // Send the email using the resendEmail function
    const result = resendEmail(htmlEmailBody, formData);

    // Handle the result of the email sending
    if (result.status === 'success') {
        console.log('Email sent successfully:', result.data);
    } else {
        console.error('Failed to send email:', result.message);
        throw new Error(result.message);  // Throw an error to be caught by the calling function
    }
};

export default contactUsEmail;
