import mongoose from "mongoose";

const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_STRING);
        console.log("connected to database");
    } catch (error) {
        console.log("Error while connecting to db",error.message);
    }

}

export default connect;