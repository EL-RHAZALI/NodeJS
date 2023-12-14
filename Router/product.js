const express = require("express");
const router = express.Router();
const Product = require("../module/products");

router.post("/send" , (req , res) => {
    data = req.body
    pdr = new Product(data);
    pdr.save()
    .then((sendProduct) => {
        res.send(sendProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get("/get" , (req , res) => {
    Product.find()
    .then((getProduct) => {
        res.send(getProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.delete("/deleteproduct/:id" , (req , res) => {
    id = req.params.id
    Product.findByIdAndDelete({_id:id})
    .then((deleteProduct) => {
        res.send(deleteProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.put("/updateproduct/:id" , (req , res) => {
    id = req.params.id
    newData = req.body
    Product.findByIdAndUpdate({_id:id} , newData)
    .then((updateProduct) => {
        res.send(updateProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = router;