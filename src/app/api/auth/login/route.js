import { NextResponse } from "next/server";


export const POST = async (req) => {
    console.log(req.body.json())
    
    
    return NextResponse.json({ ...req.body.json() })
}