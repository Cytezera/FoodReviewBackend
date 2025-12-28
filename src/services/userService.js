import  prisma  from "../lib/prisma-client.js"

export const updateUser = async(id,email, name, nationality, dob ) => {
    try { 
        const res = await prisma.user.update({
            where: {id},
            data: {
                email,
                name,
                nationality,
                dob: new Date(dob)
            },
        })
        if (!res){
            throw new Error("UNABLE TO UPDATE USER")
        }
        console.log(res)
        return res  

    }catch(err){
        if (err.code === 'P2002'){
            throw new Error("DUPLICATE EMAIL")
        }
        throw err 
    }


}
