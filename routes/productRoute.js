import { getProducts } from "../controllers/productController";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);
export default productRouter 
