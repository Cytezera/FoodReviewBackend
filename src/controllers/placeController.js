import { findAllPlaces } from "../services/placeService.js"

export const getAllPlaces = async (req , res ) => {
    try { 
        const data = await findAllPlaces()
        res.status(200).json(data)
    } catch (error){
        console.log(`Unable to get restaurants, ${error}`)
        res.status(500).json({ error: 'Something went wrong when fetching restaurants'})
    }
}