import { updateUser } from "../services/userService.js"


export const update = async (req,res) => {
    const id = Number(String(req.params.id))
    const { email , name , nationality , dob } = req.body
    
    if (!id){
        return res.status(400).json({error: "No id in params"})
    }

    try{
        const data = await updateUser(id, email,name,nationality,dob )
        return res.status(200).json({message:"Successfully updated user data " })
    }catch(err){
        if (err.message === "DUPLICATE EMAIL"){
            return res.status(400).json({ error:"Duplicate email" })
        }
        console.log(err)
        return res.status(500).json({ error:"Internal server error" })
    }
} 
