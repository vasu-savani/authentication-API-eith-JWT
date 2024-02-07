import Mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "geekshop"
        }
        await Mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}