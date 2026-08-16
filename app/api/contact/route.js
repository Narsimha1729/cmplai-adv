import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, company, message } = await req.json();
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPassword = process.env.CONTACT_SMTP_PASSWORD;
  const contactRecipient = process.env.CONTACT_RECIPIENT ?? smtpUser;

  if (!smtpUser || !smtpPassword || !contactRecipient) {
    return Response.json(
      { success: false, error: 'Contact email is not configured.' },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: contactRecipient,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: 'Unable to send message.' },
      { status: 500 },
    );
  }
}
