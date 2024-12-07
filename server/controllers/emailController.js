const nodeMailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');

exports.send_course_purchase_email_notification = async (student_email, course_details) => {
    const transporter = nodeMailer.createTransport(emailConfig);

    const mailOptions = {
        from: '2023ebcs672@online.bits-pilani.ac.in',
        to: student_email,
        subject: 'Your Course Purchase Confirmation',
        text: `
            Hello,

            Thank you for purchasing the course "${course_details.courseTitle}"!

            Course Details:
            - Title: ${course_details.courseTitle}
            - Description: ${course_details.courseDescription}
            - Price: $${course_details.coursePrice}

            If you have any questions, please contact our support.

            Best regards,
            Scaler Academy
            Programs Management Team
        `
    };

    try {

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return {
                    success: false,
                    message: 'Error sending purchase email.',
                    error: error.message,
                };
            }

            return {
                success: true,
                message: 'Email sent successfully.',
                data: info.response,
            };

        });

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
            error: err.message,
        };

    }
}