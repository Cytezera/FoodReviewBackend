import prisma from "../lib/prisma-client.js"

export const findAllPlaces = async () => {
    const places = await prisma.place.findMany()

    return places
}