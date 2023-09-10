import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import generateJWT from "../../../../services/generateJWT";

const prisma = new PrismaClient();


export const POST = async (req) => {
   
    const body = await req.json();
    const email = await body.dataUser.email
    const name = await body.dataUser.name
    const image = await body.dataUser.image
  
    const isUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    
    if (isUser !== null) {
        const dataPublicUser = {
            id: isUser.id,
            name: isUser.name,
            avatar: isUser.avatar,
            email: isUser.email
        }
        const token = await generateJWT(dataPublicUser);
        return NextResponse.json({ message: "User already exists", status: 200, token: token });
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
        const dataPublicUser = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            email: user.email
        }
        const token = await generateJWT(dataPublicUser);

        return NextResponse.json({message: "User created", status: 200, token: token });
    }
    
}
