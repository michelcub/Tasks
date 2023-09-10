import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async (req,{params}) => {
    //const {filter_email} = await params;
    //console.log(filter_email);    
    const users = await prisma.user.findMany({
        where: {
            email:{
                contains: params.email
            }
        }
    })

    console.log(users)
    
    

    console.log(params)
    return NextResponse.json({'ok': 'ok'})
}