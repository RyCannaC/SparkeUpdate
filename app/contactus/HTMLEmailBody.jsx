const htmlEmailBody= (props) => {
    return `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #0056b3;">New Contact Request</h2>
            <p><strong>First Name:</strong> ${props.firstName}</p>
            <p><strong>Last Name:</strong> ${props.lastName}</p>
            <p><strong>Phone Number:</strong> ${props.phoneNumber}</p>
            <p><strong>Email:</strong> ${props.sourceEmail}</p>
            <p><strong>Subject:</strong> ${props.subject}</p>
            <h3>Message:</h3>
            <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
                ${props.textBody}
            </p>
            <br />
            <hr />
            <p>This message was sent from your website contact form.</p>
        </div>
    `;
};

export default htmlEmailBody;