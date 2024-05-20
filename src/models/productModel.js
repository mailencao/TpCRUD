import mongoose from "mongoose";

const statusEnum = ["DISPONIBLE", "SIN STOCK"];

const productSchema = new mongoose.Schema({

    nombre:{
        type: String,
        unique: true,
        required: [true, `Este campo es obligatorio`],
        lowercase: true,
        minlength: 2,
        maxlength: 35,
    },

    precio:{
        type: Number,
        required: [true, `Este campo es obligatorio`],
        trim: true,
        min: 1,
        get: function (value) {
            return value * 1.21;
        },
    },
   
    descripcion: String,
    stock: Number,
    status:{
        type: String,
        uppercase: true,
        validate: {
            validator: function (v) {
                return statusEnum.includes(v.toUpperCase());
            }, 
            message: props => `${props.value} no es valido`,
        },
    },

    categoria: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "category"
    },
    
    destacado: Boolean,

    fechaRegistro: {
        type: Date,
        default: Date.now(),
    }
});

productSchema.set("toJSON", { getters: true, setters: true });
export default mongoose.model("product", productSchema);
