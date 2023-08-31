import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";

const prisma = new PrismaClient()

export const GET =  async ({params}) => {
    const id = params.id
    const board = prisma.board.findUnique({
        where: {
            id: id
        }
    })
    return NextResponse.json({status:200})
}


export const PUT = async (req,{params}) => {
    const id = params.id
    const data = req.json()
    const boardUpdated = prisma.board.update({
        where: {
            id:id
        },
        data: data
    })
    return NextResponse.json({status: 200, board: boardUpdated})
}

export const DELETE = async ({params}) => {
    const id = params.id
    const deleted = prisma.board.delete({
        where:{
            id: id
        }
    })


    return NextResponse.json({
        status: 200,
        message: 'deleted complete'
    })
}