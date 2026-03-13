import mongoose from "mongoose";





const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDBURI) ; 
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Error: ", error);
    }
};

export default connectDB;