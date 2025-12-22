import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import  prisma  from "../lib/prisma-client.js"

export const registerUser = async( email, name, password ) => {
    const hashedPassword = await bcrypt.hash(password,10)

    try{
        const user = await prisma.user.create({
            data: {email , name, password: hashedPassword}
        })
        return user 
    }catch (err){
        if (err.code === "P2002"){
            throw new Error("Email already in use")
        }
        throw err
    }
}


export const loginUser = async (name, email, password) => {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    console.log(email)

    if (!user) {
        throw new Error("INVALID_CREDENTIALS")
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
        throw new Error("INVALID_CREDENTIALS")
    }

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "6d" }
    )

    return token
}

