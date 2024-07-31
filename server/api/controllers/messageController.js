import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const leaveMessage = async (req, res) => {
      const year=new Date().getFullYear();
     const { name, message ,companyName} = req.body;
     var decodedEmail = decodeURIComponent(req.body.email);
     const email=decodedEmail||req.body.email;
     let transporter = nodemailer.createTransport({
         host: 'smtp.office365.com',
         port: 587,
         secure: false,
         auth: {
             user: process.env.EMAIL,
             pass: process.env.PASSWORD
         }
     });

     var mailGenerator = new Mailgen({
         theme: 'default',
         product: {
             name: 'Bista Technologies Inc.',
             link: 'https://bistatechnologies.com/'
         },
         copyright: `Copyright © ${year} Bista Technologies Inc. All rights reserved.`,
     });

     var emailBody={
         name: 'Bista Technologies Inc.',
         body: {
            intro: `<strong>${name}</strong> from <strong>${companyName}</strong> has sent a new message for you.`,
            table: {
                data: [
                    {
                        'Message': message
                    }
                ],
                columns: {
                    customWidth: {
                        Message: '100%'
                    },
                    customAlignment: {
                        Message: 'left'
                    }
                }
            },
            outro: `Contact ${name} at ${email}`
        }
     }
     var emailTemplate = mailGenerator.generate(emailBody);

     let mailOptions = {
         from: process.env.EMAIL,
         to: process.env.RECEIVER_EMAIL,
         subject: `${name} left a message`,
         html: emailTemplate
     };
 
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return res.status(500).json({ error: error.toString() });
         }
         res.status(200).json({ message: 'Email sent successfully' });
     });
}

export { leaveMessage };