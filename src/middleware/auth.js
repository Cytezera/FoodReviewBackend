import jwt from "jsonwebtoken"

export const authenticateJWT = (req, res ,next ) => {
    const authHeader = req.headers.authorization;
    if (!authHeader ) return res.status(401).json({ error: "Authorization header missing "});
    try{
        const payload = jwt.verify(authHeader, process.env.JWT_SECRET)
        req.userId = payload.userId
        console.log(req.userId)
        next();
    }catch (err){
        return res.status(401).json({ error: "Invalid or expired token "})
    }
}
