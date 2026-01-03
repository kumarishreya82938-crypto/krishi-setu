const express=require('express')
const connectdb=require('./DB');
const proSchema=require('./proSchema')
const cors=require('cors')

connectdb();

const app=express();


app.use(cors()); 

app.use(express.json())

app.get('/products',(req,res)=>{
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

