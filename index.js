require('dotenv').config()
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: process.env.HOST, // Google SMPT
    port: process.env.PORT,
    secure: process.env.SECURE, // True para porta 465
    auth: {
        user: process.env.USER,
        pass: process.env.PASS, // Senha gerada pelo Google
    }
})

transport.sendMail({
    from: `CodeDive <${process.env.USER}>`,
    to: 'codedivebr@hotmail.com',
    subject: 'Email com Nodemailer',
    html: '<h1>Olá, CodeDive!</h1> <p>Email encaminhado com Nodemailer</p>',
    text: 'Olá CodeDive! Email encaminhado com Nodemailer'
})
.then(() => console.log('Email enviado com sucesso!'))
.catch(err => console.log(err))