import { NextResponse } from "next/server"

export const POST = async () => {
    //aqui vamos a hacer la validacion de que el token no este manipulado
    return NextResponse.json({status: 200, })
}