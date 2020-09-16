const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");


module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products/new", ProductController.addNewProduct);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct)
};