import express from "express";
import { create, deleteUser, get, update } from "../controllers/userController.js";

const userRoute = express.Router()
userRoute.post("/create", create);
userRoute.get("/getAll", get);
userRoute.put("/update/:id", update);
userRoute.delete("/deleteUser/:id", deleteUser);

export default userRoute;