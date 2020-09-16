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

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(thisproduct => res.json(thisproduct))
        .catch(err => res.json({ message: "Error", error: err }))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: "Error", error: err }))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json({ message: "Error", error: err }))
}