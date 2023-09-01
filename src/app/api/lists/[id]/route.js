import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const PUT = async (req,{params}) => {
    const id = params.id
    const data = req.json()
    const listUpdated = prisma.list.update({
        where: {
            id:id
        },
        data: data
    })
    return NextResponse.json({status: 200, list: listUpdated})
}

export const DELETE = async ({params}) => {
    const id = params.id
    const deleted = prisma.list.delete({
        where:{
            id: id
        }
    })

    return NextResponse.json({status: 200, message: 'deleted complete'})
}