import express from "express"
import userRoutes from "./routes/user.routes.js"
import placeRoutes from "./routes/place.routes.js"

const app = express()
app.use(express.json())

app.use('/api/users', userRoutes )
app.use('/api/places', placeRoutes)

export default app
