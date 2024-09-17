// emailService.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (formData) => {
    try {
        const { data, error } = await resend.emails.send({
            from: formData.sourceEmail,
            to: ['info@sparkeunlimited.ca'],
            subject: formData.subject,
            react: htmlEmailBody({ formData }),  // htmlEmailBody needs to be imported or defined in this file
        });

        if (error) {
            throw new Error(error);  // Propagate error to the caller
        }

        return data;  // Return the data to the caller
    } catch (error) {
        throw new Error(`Email sending failed: ${error.message}`);
    }
};
