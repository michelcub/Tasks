import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
    try{
        const id = 1
        const boards = await prisma.Board.findMany({
        where:{
            userId: id
        }
    })
    return NextResponse.json({status:200, data: boards})
    }catch(error){
        console.log(error);
    }   
}


export const POST = async (req) => {

    const id = 1

    const data = await req.json()
    console.log(req.headers.authorization)
    const findBoard = await prisma.board.findFirst({
        where:{
            title: data.title,
            userId: Number(id)
        }
    })
    if(findBoard) return NextResponse.error({status: 400, message: 'Ya existe un tablero con ese nombre'})
    console.log(data.description)
    const board = await prisma.board.create({
        data:{
            title: data.title,
            details: data.description,
            userId: Number(id),
            
        }
    })
    if(!board) return NextResponse.error({status: 500, message: 'Error al crear el tablero'})
    // const members = await prisma.Member.createMany({
    //     data: data.members.map((member) => ({
    //         userId: Number(member.id),
    //         boardId: Number(board.id)
    //     }))
    // })

    return NextResponse.json({status: 200, data: board})
}