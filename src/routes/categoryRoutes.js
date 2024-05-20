import express from "express";
import { create, deleteCategory, getAll, getFindOne, update } from "../controllers/categoryController.js";

const categoryRoute = express.Router()
categoryRoute.post("/create", create);
categoryRoute.get("/getAll", getAll);
categoryRoute.get("/fineOne/:nombre", getFindOne);
categoryRoute.put("/update/:id", update);
categoryRoute.delete("/deleteProduct/:id", deleteCategory);

export default categoryRoute;