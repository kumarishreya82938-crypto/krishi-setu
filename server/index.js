const express=require('express')
const connectdb=require('./DB');
const proSchema=require('./proSchema')

connectdb();

const app=express();
app.use(core())
app.use(express.json())

app.get('/product',(req,res)=>{
proSchema.find({})
.then(cat=>{ 
    res.json(cat)
console.log(cat);
})
});
app.get('/',(req ,res)=>{
    res.send("HELLO");
})


chasma=()=>{
    console.log(" chasma is running ")
}

const port=5000;
app.listen(port,chasma);

