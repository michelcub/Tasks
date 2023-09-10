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