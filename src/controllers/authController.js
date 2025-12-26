import { registerUser , loginUser ,fetchUser }  from "../services/authService.js";
import { authenticateJWT } from "../middleware/auth.js"

export const register = async ( req , res )  => {
    const { username , email, password, dateOfBirth , nationality } = req.body

    if (!email || !password || !username ){ 
        return res.status(400).json({error: "Missing fields "})
    }

    try{
        await registerUser( { email,name:username ,password, dob:dateOfBirth , nationality} )
        console.log(`${email} successfully registered`)
        res.status(201).json({msssage:"Account successfully registered" })
    }catch(err){
        console.log(`${email} failed to register`)
        console.log(err)
        if (err.message ===  "Email already in use"){
          res.status(400).json({ error: err.message , message: "Unable to create account", field:"email"})
          return
        }
        res.status(400).json({error: err.message , message: "Unable to create account"})
    }
} 

export const login = async (req, res ) => { 
    const { name,email, password  } = req.body
    if (!(email || name) || !password){
        return res.status(400),json({error: " Email and password required " })
    }

    try {
        const data = await loginUser(name, email, password )
        res.status(201).json({ message: "Successfully logged in " , token: data.token , user: data.user})
    }catch(err){
        if (err.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                error: "Invalid email or password" , message: "Unable to log in"
            })
        }

        console.error(err)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

export const fetch = async (req, res ) => {
    if(!req.userId){
        return res.status(401).json({error: "No session ongoing"})
    }

    try{
        const data = await fetchUser(req.userId)

        return res.status(201).json({ message:"Successfully logged in" , user: data.user})
    }catch(err){
        if (err.message === "UNABLE TO FETCH USER"){
            return res.status(401).json({
                error: "No user found"
            })
        }

        return res.status(500).json({ error: "Internal server error"})
    }


}