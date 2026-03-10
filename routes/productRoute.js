import { getProducts } from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);
export { productRouter };
