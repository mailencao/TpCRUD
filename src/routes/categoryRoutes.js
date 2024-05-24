import express from "express";
import { create, deleteCategory, getAll, getFindOne, update } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";

const categoryRoute = express.Router()

categoryRoute.post("/create", verifyTokenMiddleware, create);
categoryRoute.get("/getAll", getAll);
categoryRoute.get("/fineOne/:nombre", getFindOne);
categoryRoute.put("/update/:id", verifyTokenMiddleware, update);
categoryRoute.delete("/deleteProduct/:id",  verifyTokenMiddleware, deleteCategory);

export default categoryRoute;