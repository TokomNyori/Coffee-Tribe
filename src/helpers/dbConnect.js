import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, { dbName: "foodApp" })
        console.log('Database Connection')
    } catch (error) {
        console.log('Failed to connect to Database')
        console.log(error)
    }
}