import express from "express" 
import { getAllPlaces } from "../controllers/placeController.js"

const router = express.Router()

router.get('/', (req,res) => {
    res.send("router place works")
})
// router.get('/', (req,res) => {
//     res.send("ok")
// })

router.get('/getAllPlaces',(getAllPlaces) )

export default router 