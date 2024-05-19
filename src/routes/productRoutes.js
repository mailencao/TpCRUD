import express from "express";
import { create, deleteProduct, get, update } from "../controllers/productController.js";

const productRoute = express.Router()
productRoute.post("/create", create);
productRoute.get("/getAll", get);
productRoute.put("/update/:id", update);
productRoute.delete("/deleteProduct/:id", deleteProduct);

export default productRoute;