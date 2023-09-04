import { PrismaClient } from "@prisma/client"
import encript from "./encript"

const prisma = new PrismaClient()



const checkCredentials = async (credentials, req) => {
    console.log(credentials)
    //if(!credentials.email || !credentials.password) return null
    const password = await encript(credentials.password)

    const user = await prisma.user.findFirst({
        where: {
            email: credentials.email,
            password: String(password)
        }
    })

    if(!user) return {status:'error', message: "Invalid credentials"}

    return {status: "success", data: user}
} 

export default checkCredentials