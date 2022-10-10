const express=require("express");
const app=express();
const cors=require("cors");
const ObjectId = require("mongodb").ObjectID;
const bodyParser=require("body-parser");

app.use(cors({
    origin: '*'
  }));

  require('dotenv').config();
  app.use(bodyParser.json());
app.use(express.json());

  const getClient=()=>{
    const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.LINK;
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1  });
  }



app.get("/menu/:id/:type",(req,res)=>{
    const id=req.params.id;
    const type=req.params.type;
const client=getClient();
    client.connect(async(err) => {
      const collection = client.db("restaurant").collection("menu");
      const data=await collection.find({restaurantID:id,type:type}).toArray();
      res.send(data);

        if(err)throw new Error();
    
      client.close();
    });


})

app.delete("/delMenu/:id",(req,res)=>{
    const id=ObjectId(req.params.id);
    if(!id)return;

    const client=getClient();
    client.connect(async(err) => {
        const collection = client.db("restaurant").collection("menu");
        const data=await collection.deleteOne({_id:id});
        res.send(data);
        client.close();
      });
})

//orders
app.get("/order/:id",(req,res)=>{
    const id=req.params.id;
const client=getClient();
    client.connect(async(err) => {
      const collection = client.db("restaurant").collection(id);
      const data=await collection.find().toArray();
      res.send(data);

        if(err)throw new Error();
    
      client.close();
    });
})

app.delete("/delOrder/:rid/:id",(req,res)=>{
    const id=ObjectId(req.params.id);
    const rid= req.params.rid;
    if(!id)return "Invalid Id!";

    const client=getClient();
    client.connect(async(err) => {
        const collection = client.db("restaurant").collection(rid);
        const data=await collection.deleteOne({_id:id});
        res.send(data);
        client.close();
      });
})

app.listen(5500);