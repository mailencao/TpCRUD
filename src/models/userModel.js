import mongoose, { now } from "mongoose";
import { claveValida } from "../utils/validators.js";

const userSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 2,
        maxlength: 20,
    },

    apellido:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 2,
        maxlength: 20,
    },

    edad:{
        type: Number,
        required: true,
        trim: true,
        min: 18,
        max: 110,
    },

    nombreUsuario:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 20,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8,
        maxlength: 30,
        match: /^\S+@\S+\.\S+$/,
        lowercase: true,
    },
    
    clave:{
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                return claveValida(value);
            }, message: "La contraseña debe tener almenos una mayuscula, un numero, almenos un $%-_<.> y entre 6 y 20 caracteres" 
        }
    },

    fechaRegistro: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model("user", userSchema);