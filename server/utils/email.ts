import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'majalis.msz@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function sendContactFormEmail(data: ContactFormData): Promise<boolean> {
  try {
    await transporter.sendMail({
      to: process.env.GMAIL_USER || 'majalis.msz@gmail.com',
      from: `"Portfolio Contact" <${process.env.GMAIL_USER || 'majalis.msz@gmail.com'}>`,
      subject: `ポートフォリオサイトからのお問い合わせ - ${data.name}様`,
      text: `
名前: ${data.name}
メールアドレス: ${data.email}
メッセージ:
${data.message}
      `,
      html: `
<div>
  <p><strong>名前:</strong> ${data.name}</p>
  <p><strong>メールアドレス:</strong> ${data.email}</p>
  <p><strong>メッセージ:</strong></p>
  <p>${data.message.replace(/\n/g, '<br>')}</p>
</div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}