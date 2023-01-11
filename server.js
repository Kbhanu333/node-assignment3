const express = require("express")

const app=express()

const middleware1=(req, res, next)=>{
    console.log("middleware1")
    next()
}

const middleware2=(req, res, next)=>{
    console.log("middleware2")
    next()
}

app.use(middleware1)  //globally i.e it is applicable to the all routes

app.get('/home', middleware2, function(req, res){
    res.status(200).send(
        "<h1>This is Home page</h1>"
        )
    console.log("Home is having middleware of both 1 and 2")
})

app.get('/student',  function(req, res){
    res.status(200).send(
        "<h1>This is Student page</h1>"
        )
    console.log("student is having middleware1")
})

app.get('/about', middleware2,  function(req, res){
    res.status(200).send(
        "<h1>This is about page</h1>"
        )
    console.log("about is having middleware both 1 and 2")
})

app.get('/description', function(req, res){
        res.status(200).send(
        "<h1>This is description</h1>"
        )
    console.log("description is having middleware 1 ")
})


app.listen(8080,()=>{
 console.log( "app is running in 8080 port")
})




