import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
   
    nombre:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        minlength: 2,
        maxlength: 35,
    },
});

export default mongoose.model("category", categorySchema);