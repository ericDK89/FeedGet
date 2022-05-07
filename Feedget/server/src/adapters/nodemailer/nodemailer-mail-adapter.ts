import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f18f2ce5510b65",
    pass: "2930f46223d2fd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <teste@mailtrap.com>',
      to: 'Eric Macedo <ericthr42@gmail.com>',
      subject,
      html: body,
    })
  };
}

// [
//   `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//   `<p>Tipo do feedback: ${type}</p>`,
//   `<p>Comentário: ${comment}</p>`,
//   `</div>`
// ].join('\n')