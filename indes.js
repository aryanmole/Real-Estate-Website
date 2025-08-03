const express=require("express");
const app=express()
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[{
    username:"aryan",
    content:"hdnask"
},{
     username:"tanish",
    content:"hwjndeaksdnask"
},{
     username:"riya",
    content:"kajsnxwk"
}]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    console.log(req.body);
    let{username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
})

app.get("/",(req,res)=>{
    res.send("server working well");
})

app.listen(port,()=>{
    console.log("listening to port 8080");
})