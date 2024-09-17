const htmlMessageBody = (formData) => {
    const { firstName, lastName, phoneNumber, sourceEmail, subject, textBody } = formData;

    return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #0056b3;">New Contact Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${sourceEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">${textBody}</p>
        <br />
        <hr />
        <p>This message was sent from your website contact form.</p>
      </div>
    `;
};

export default htmlMessageBody;