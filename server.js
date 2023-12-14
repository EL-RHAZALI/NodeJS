const express = require("express");
const app = express();

require("./confige/connect");

app.use(express.json());

const productRoute = require("./Router/product");
const userRoute = require("./Router/user");

app.use("/product" , productRoute);
app.use("/user" , userRoute);

app.listen(3000 , ()=>{
    console.log("Server is working now");
});
