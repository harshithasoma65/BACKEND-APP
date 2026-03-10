import { getProducts ,addProduct,addProductForm,deleteProduct,editProduct,saveProduct} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);
productRouter.get("/add",addProductForm);
productRouter.post("/add", addProduct);

productRouter.post("/:id/delete", deleteProduct);
productRouter.post("/:id/edit", editProduct);


export {productRouter};
