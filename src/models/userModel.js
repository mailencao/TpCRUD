import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: true,
    },

    apellido:{
        type: String,
        required: true,
    },

    edad:{
        type: Number,
        required: true,
    },

    nombreUsuario:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },
    
    clave:{
        type: String,
        required: true,
    },
});

export default mongoose.model("user", userSchema);