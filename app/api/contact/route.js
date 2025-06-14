import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Setup SMTP transporter (example: Gmail App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moreshwarpardeshi278@gmail.com',            // Your email
      pass: 'fzjq otml yfgl wpvf',         // Gmail App Password (not your real password)
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'moreshwarpardeshi278@gmail.com',                 // Where you want to receive messages
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message });
  }
}
