import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes.js";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";


const app = express();
app.use(bodyParser.json());

connectDB();

//url base
app.get("/", (req, res) => {
    res.send("hola mundo")
});

//rutas de usuario
app.use("/api/user", userRoute);

//inicializa el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});