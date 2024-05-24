import express from "express";
import { create, deleteUser, get, update, validar } from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";

const userRoute = express.Router()

userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddleware, get);
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validar);

export default userRoute;