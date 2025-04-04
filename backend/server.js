const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
    auth: {
        user: 'prajwalpohane678@gmail.com', // Your email address
        pass: 'znej uhzx lppx drus' // Your email password or app password
    }
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
    const { subject, body, email } = req.body;

    const mailOptions = {
        from: email, // Sender address from user input
        to: 'prajwalpohane678@gmail.com', // Receiver address (your email)
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
            return res.status(500).send('Error sending email: ' + error.message);
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
