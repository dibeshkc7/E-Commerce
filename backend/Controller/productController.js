const ProductModel = require("../Model/productModel");


exports.addProduct = async(req, res)=>{
    const { productName, productPrice, productDescription, productRating, productCategory, productImage, totalProduct } = req.body;

    const addProduct = new ProductModel({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productRating: productRating,
        productCategory: productCategory,
        productImage: req.file.path,
        totalProduct: totalProduct
    })

    addProduct.save();

    if (!addProduct) {
        return res.json({ error: "Product not saved" }).status(400);
    }
    return res.json({ message: "Product added successfully" });
}

exports.getAllProduct = async(req, res) => {
    const products = await ProductModel.find();

    res.send(products)
}