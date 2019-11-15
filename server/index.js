var express=require("express");
var student=require("./student");
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use("/student",student);


app.listen(4500,function(){
    console.log("listing from 4500");
});


