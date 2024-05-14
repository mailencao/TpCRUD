import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

export const connectDB =async () => {
    try{
        await mongoose.connect(MONGOURI);
        console.log("Conectado a la Base de datos");
    } catch (error) {
        console.error("Error al conectarse a la Base de datos", error);
        process.exit(1);
    }
};

    
    
        
    
