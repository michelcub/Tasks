import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const GET = ({params}) => {
    const id = params.id
    const tasks = prisma.task.findMany({
        where:{
            listId: id
        }
    })

    return NextResponse.json({status:200, data: tasks})
}

export const POST = async ({params, body}) => {

    const task = await prisma.task.create({
        data:{
            userId: 1,
            title: body.name,
            description: body.description,
            members: body.members
        }
    })

    return NextResponse.json({status:200, data: task})
}