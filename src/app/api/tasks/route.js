import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const GET = async () => {
    try{
        const tasks = await prisma.Task.findMany()
        console.log(tasks)
        if(!Array.isArray(tasks)) return NextResponse.json({ status: 400, message: "No se encontraron tareas"})
        if(tasks === []) return NextResponse.json({status: 404, message: 'No Hay tareas guardadas'})
        if(tasks?.length === 0) return NextResponse.json({ status: 404, message: "No Hay tareas guardadas"})
        if(tasks?.length > 0) return NextResponse.json({ status: 200, data: tasks})
    }catch(error){
        console.log(error)
    }
}

export const POST = async (req) => {
    try{
        const newTask = await req.json()
        console.log({...newTask})
        const task = await prisma.Task.create({data:{
            title: newTask.title,
            description: newTask.description,
            position: Number(newTask.position),
            listId: Number(newTask.listId),
            boardId: Number(newTask.boardId),
            userId: Number(newTask.userId)   
        }})

        return NextResponse.json({ status: 200, data: task})

    }catch(error){
        console.log(error)
    }
}