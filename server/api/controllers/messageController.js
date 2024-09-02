import Mailgen from 'mailgen';
import sendMail from '../services/sendMail.js';

const leaveMessage = async (req, res) => {
    const year = new Date().getFullYear();
    const { name, message, companyName } = req.body;
    const decodedEmail = decodeURIComponent(req.body.email);
    const email = decodedEmail || req.body.email;

    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Bista Technologies Inc.',
            link: 'https://bistatechnologies.com/'
        },
        copyright: `Copyright © ${year} Bista Technologies Inc. All rights reserved.`,
    });

    const emailBody = {
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
    };

    const emailTemplate = mailGenerator.generate(emailBody);

    try {
        await sendMail(emailTemplate, name);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export {leaveMessage};
