const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/TestUsers")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("erreur");
})
module.exports = mongoose;
