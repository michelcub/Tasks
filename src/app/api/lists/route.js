import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const GET = () => {
    const id = 1
    const boards = prisma.list.findMany({
        include:{
            boardId: id
        }
    })

    return NextResponse.json({status:200, data: boards})
}

export const POST = async (req) => {
    const data = req.json()
    const list = prisma.list.create({
        data: data
    })

    return NextResponse.json({status: 200, data: list})
}