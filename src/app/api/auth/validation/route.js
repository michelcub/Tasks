import { NextResponse } from "next/server";


export const POST = async () => {
    return NextResponse.json({status:200, msg:"user validation from email success"})
}