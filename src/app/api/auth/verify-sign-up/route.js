import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const POST = async (req) => {
    console.log(req)
    const body = await req.json();
    const email = await body.dataUser.email
    const name = await body.dataUser.name
    const image = await body.dataUser.image
    console.log(body.dataUser)
    const isUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    console.log(isUser)
    if (isUser !== null) {
        return NextResponse.json({ message: "User already exists", status: 200, user: isUser });
    }

    if(isUser === null) {
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: body.password? body.password : Math.random().toString(36).slice(-8),
                avatar: image
            }
        });
        return NextResponse.json({ user, message: "User created", status: 200 });
    }
    
}
