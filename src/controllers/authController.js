import { registerUser , loginUser }  from "../services/authService.js";

export const register = async ( req , res )  => {
    const { name, email, password, } = req.body

    if (!email || !password || !name ){ 
        return res.status(420).json({error: "Missing fields "})
    }

    try{
        await registerUser(email,name,password)
        res.status(201).json({msssage:"Account successfully registered" })
    }catch(err){

        res.status(400).json({error: err , message: "Unable to create account"})
    }
} 

export const login = async (req, res ) => { 
    const { name,email, password  } = req.body
    if (!(email || name) || !password){
        return res.status(400),json({error: " Email and password required " })
    }

    try {
        const token = await loginUser(name, email, password )
        res.status(201).json({ message: "Successfully logged in " , token})
    }catch(err){
        if (err.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                error: "Invalid email or password"
            })
        }

        console.error(err)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
}