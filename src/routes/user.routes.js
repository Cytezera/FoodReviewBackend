import express from "express"
import { register , login ,fetch} from "../controllers/authController.js"
import { authenticateJWT } from "../middleware/auth.js";
import { update } from "../controllers/userController.js"

const router = express.Router();

router.get('/', (req,res) => {
    res.send("dabian")
})

router.post('/login', (login))

router.post('/register',(register))

router.post('/me',authenticateJWT, (fetch))

router.patch('/update/:id', (update))

export default router 