import { getProducts ,addProduct} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);
productRouter.get("/add",addProductForm);
export default productRouter;
