import  {NextResponse}  from "next/server"
import {PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (req,{params}) => {
    try{
        const findTask = await prisma.Task.findUnique({where:{id: Number(params?.id)}})
        return NextResponse.json({ status:200 ,data: findTask})
    }catch(error){
        console.log(error)
    }
}

export const PUT = async (req,{params}) => {
    try{
        const {title, description} = await req.json()
        const updateTask = await prisma.Task.update({where:{id: Number(params?.id)},data:{title, description}})
        return NextResponse.json({status:200, data: updateTask})
    }catch(error){
        console.log(error)
    }
}


export const DELETE = async (req,{params}) => {
    try{
        const deleteTask = await prisma.Task.delete({where:{id: Number(params?.id)}})
        return NextResponse.json({status:200, data: deleteTask})
    }catch(error){
        console.log(error)
    }
}