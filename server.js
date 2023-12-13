const express = require("express");
const app = express();
require("./confige/connect");

const User = require("./module/users");
const Product = require("./module/products");

app.use(express.json());


app.post("/add" , (req , res)=>{
    data = req.body
    console.log(data);
    usr = new User(data);
    usr.save()
    .then(
        (savedUser) =>{
            res.send(savedUser)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
});

app.get("/getall" , (req , res)=>{
    User.find()
    .then(
        (users) =>{
            res.send(users)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
});

app.get("/getbyname/:name" , (req , res)=>{
    myName = req.params.name;
    User.findOne({name:myName})
    .then(
        (user) =>{
            res.send(user)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
});

app.put("/update/:id" , (req , res)=>{
    myId = req.params.id
    newData = req.body
    User.findByIdAndUpdate({_id:myId},newData)
    .then((update) => {
        res.send(update)
    })
    .catch((err) => {
        res.send(err)
    })
});

app.delete("/delete/:id" , (req , res)=>{
    id = req.params.id
    User.findByIdAndDelete({_id:id})
    .then((deleteUser) => {
        res.send(deleteUser)
    })
    .catch((err) => {
        res.send(err)
    })
});

app.post("/send" , (req , res) => {
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

app.get("/get" , (req , res) => {
    Product.find()
    .then((getProduct) => {
        res.send(getProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

app.delete("/deleteproduct/:id" , (req , res) => {
    id = req.params.id
    Product.findByIdAndDelete({_id:id})
    .then((deleteProduct) => {
        res.send(deleteProduct)
    })
    .catch((err) => {
        res.send(err)
    })
})

app.put("/updateproduct/:id" , (req , res) => {
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




app.listen(3000 , ()=>{
    console.log("Server is working now");
});
