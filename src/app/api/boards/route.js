import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = () => {
    const id = 1
    const boards = prisma.board.findMany({
        include:{
            userId: id
        }
    })

    return NextResponse.json({status:200, data: boards})
}