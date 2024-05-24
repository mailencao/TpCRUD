import express from "express";
import { create, deleteProduct, get, getFindOne, update } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";

const productRoute = express.Router()

productRoute.post("/create", verifyTokenMiddleware, create);
productRoute.get("/getAll", verifyTokenMiddleware, get);
productRoute.get("/fineOne/:nombre", verifyTokenMiddleware, getFindOne);
productRoute.put("/update/:id", verifyTokenMiddleware, update);
productRoute.delete("/deleteProduct/:id", verifyTokenMiddleware, deleteProduct);

export default productRoute;