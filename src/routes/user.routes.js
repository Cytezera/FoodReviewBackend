import express from "express"
import { register , login ,fetch} from "../controllers/authController.js"
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.get('/', (req,res) => {
    res.send("dabian")
})

router.post('/login', (login))

router.post('/register',(register))

router.post('/me',authenticateJWT, (fetch))

export default router 