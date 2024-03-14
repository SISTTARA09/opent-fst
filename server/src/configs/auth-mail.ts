import nodemailer from "nodemailer";
// import crypto from "node:crypto";

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: "yassinesisttara06@gmail.com",
		pass: "wiru krrn xcwn yqsj",
	},
});

export const sendMail = async (email: string, activationCode: string) => {
	try {
		await transporter.sendMail({
			from: '"yassine " yassinesisttara06@gmail.com',
			to: email,
			subject: "email verification",
			text: "verify you account",
			html: `<div>
      <h1 style="color: red;">Hi, activation page:)</h1>
      <p>to activate you account:</p></br>
      <h3><a href="http://localhost:5000/auth/confirm/${activationCode}">click here:)</a></h3>
      </div>`,
		});
		console.log("email sent successfully:)");
	} catch (error) {
		throw new Error(error.message);
	}
};
