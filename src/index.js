import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGODB_URI;

mongoose.connect(MONGOURI).then(() => {
    console.log("Conectado a la Base de datos")
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    })
}).catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("hola mundo")
});

app.use("/api/user", userRoute);