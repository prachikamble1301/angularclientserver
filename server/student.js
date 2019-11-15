var express=require("express");
var mysql=require("mysql");
var studrouter=express();

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"college"
});


connection.connect();

studrouter.get("/",function(req,res){
    let query=`select * from student`;

    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});

studrouter.get("/:no",function(req,res){
    let no=parseInt(req.params.no);
    let query=`select * from student where rno=${no}`;
    console.log(query);
    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});

studrouter.post("/",function(req,res){
    let srno=req.body.rno;
    let ssname=req.body.sname;
    let smark=req.body.mark;


    let query=`insert into student values(${srno},'${ssname}',${smark})`;
    console.log(query);

    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});

studrouter.put("/:no",function(req,res){
    let no=req.params.no;
    let ssname=req.body.sname;
    let smark=req.body.mark;


    let query=`update student set  sname='${ssname}',mark=${smark} where rno=${no}`;
    console.log(query);

    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});

studrouter.delete("/:no",function(req,res){
    let no=parseInt(req.params.no);
    let query=`delete from student where rno=${no}`;
    console.log(query);
    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});


module.exports=studrouter;
