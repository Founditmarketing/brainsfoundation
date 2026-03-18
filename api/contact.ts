import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const htmlBody = `
      <h1>New Inspection Request</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Needed:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const data = await resend.emails.send({
      from: 'hello@briansfoundationrepair.com',
      to: 'briansfoundation@gmail.com',
      replyTo: email,
      subject: `New Inspection Request from ${firstName} ${lastName}`,
      html: htmlBody,
    });

    if (data.error) {
       return res.status(400).json({ error: data.error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
