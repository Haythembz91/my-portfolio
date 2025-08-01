import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
function isEmailValid(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    if(!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    if(!isEmailValid(email)) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    console.log(name, email, message);
    try{
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.EMAIL_TO as string,
            subject: 'New email from your portfolio',
            html: '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Message: ' + message + '</p>'
        })
        return NextResponse.json({ message: 'Email sent successfully' });
    }catch(e){
        console.log(e)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}