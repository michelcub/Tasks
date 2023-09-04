import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req) => {
    try{
        const body = JSON.parse(req.body);
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({ message: "Email or password is missing", status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
            password
        }
    })
    if(!user){
        return NextResponse.json({ message: "User not found", status: 400 });
    }
    return NextResponse.json({ user, message: "User logged in", status: 200 })
    
    }catch(e){
        console.log(e)
    }
}