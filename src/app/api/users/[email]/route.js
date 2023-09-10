import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async (req,{params}) => {
    const users = await prisma.user.findMany({
        where: {
            email:{
                contains: params.email
            }
        }
    })
    return NextResponse.json({status: 200, data: users})
}