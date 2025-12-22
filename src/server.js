import app from "./app.js"
import dotenv from "dotenv"

dotenv.config()

const port = 9000

app.listen(port, () => [
    console.log(`server connected to port ${port} `)
])