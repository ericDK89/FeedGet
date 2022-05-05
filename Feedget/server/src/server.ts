import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer'

const app = express();

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f18f2ce5510b65",
    pass: "2930f46223d2fd"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <teste@mailtrap.com>',
    to: 'Eric Macedo <ericthr42@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  res.status(201).json({ data: feedback })
})

app.listen(3333, () => { console.log("Server running on port 3333") });