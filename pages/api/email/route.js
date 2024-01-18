import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request) {
    const { email, message } = await request.json()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    });

    const mailOptions = {
        from: env.NODEMAILER_EMAIL,
        to: "zowhair@gmail.com",
        subject: `Message from (${email})`,
        text: message,
    }

    try {
        await transport.sendMail(mailOptions)
        return NextResponse.json({ message: 'Success!', status: 200 })
    } catch(err) {
        return NextResponse.json({ message: 'Failed!', status: 500 })
    }
}