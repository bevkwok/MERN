const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProduct => res.json({ product: allProduct}))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.addNewProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(newAddedProduct => res.json({ product: newAddedProduct }))
        .catch(err => res.json({ message: "Error", error: err }))
}