var express = require('express');
const app = express();
const port=process.env.PORT||8210;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const MongoClient=mongo.MongoClient;
const mongourl="mongodb+srv://govinduchaitanya3:1234@cluster0.jmt1h.mongodb.net/aha?retryWrites=true&w=majority"
/*const mongourl="mongodb://localhost:27017"*/
var db;

//get
app.get('/',(req,res)=>{
    res.send("welcome to Api Chaitanya krishna")
})

//category
app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//data

app.get('/data',(req,res)=>{
    db.collection('data').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//List of handpicked movies

app.get('/data/:id',(req,res) => {
    var id = req.params.id
    db.collection('data').find({category_id:Number(id)}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log("error while connecting...")
    db=client.db('aha');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    })
});