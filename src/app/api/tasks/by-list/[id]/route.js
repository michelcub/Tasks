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