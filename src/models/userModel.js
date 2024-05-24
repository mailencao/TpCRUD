import mongoose from "mongoose";
import { claveValida } from "../utils/validators.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: [true, `Este campo es obligatorio`],
        trim: true,
        lowercase: true,
        minlength: 2,
        maxlength: 20,
    },

    apellido:{
        type: String,
        required: [true, `Este campo es obligatorio`],
        trim: true,
        lowercase: true,
        minlength: 2,
        maxlength: 20,
    },

    edad:{
        type: Number,
        required: [true, `Este campo es obligatorio`],
        trim: true,
        min: 18,
        max: 110,
    },

    email:{
        type: String,
        required: [true, `Este campo es obligatorio`],
        unique: true,
        trim: true,
        minlength: 8,
        maxlength: 30,
        match: /^\S+@\S+\.\S+$/,
        lowercase: true,
    },
    
    clave:{
        type: String,
        required: [true, `Este campo es obligatorio`],
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

userSchema.pre("save", function (next) {
    this.clave = bcrypt.hashSync(this.clave, 10);
    next();
});

export default mongoose.model("user", userSchema);