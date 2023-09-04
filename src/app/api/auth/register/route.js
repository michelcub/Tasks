import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req) => {
    const body = JSON.parse(req.body);
    const { email, password, name } = body;

    if (!email || !password || !name) {
        return NextResponse.json({ message: "Missing fields", status: 400 });
    }

    
    
    const user = await prisma.user.create({
        data: {
            email,
            password,
            name
        }
    });
    // Do something with email and password
    
    return NextResponse.json({ user, message: "User created", status: 200 });
}
