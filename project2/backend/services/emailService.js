const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: '',
    },
});

exports.sendValidationEmail = async (email, validationCode) => {
    const mailOptions = {
        from: 'dheerajsingh86696@gmail.com',
        to: email,
        subject: 'Validation Code',
        text: `Your validation code is ${validationCode}`,
    };

    await transporter.sendMail(mailOptions);
};