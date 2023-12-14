const express = require("express");
const router = express.Router();
const User = require("../module/users");

router.post("/add" , (req , res)=>{
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

router.get("/getall" , (req , res)=>{
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

router.get("/getbyname/:name" , (req , res)=>{
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

router.put("/update/:id" , (req , res)=>{
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

router.delete("/delete/:id" , (req , res)=>{
    id = req.params.id
    User.findByIdAndDelete({_id:id})
    .then((deleteUser) => {
        res.send(deleteUser)
    })
    .catch((err) => {
        res.send(err)
    })
});

module.exports = router;