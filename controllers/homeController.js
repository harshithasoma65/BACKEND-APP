
import Product from "../models/productModel.js";

const homePage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("home/index", { products });
  } catch (err) {
    console.log(err);
  }
};

export default homePage;