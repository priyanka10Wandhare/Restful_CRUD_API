const express = require('express')
const mongoose =require('mongoose')
const product =require('./models/productModels')
const app = express ()

app.use(express.json())


// routes

app.get('/',(req,res)=>{
    res.send('Hello NODE API')

})
app.get('/blog',(req,res)=>{
    res.send('Hello Blog ,My name is Priyanka')

})

app.post('/product',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:PriyankaW10@priyankaapi.cpjrmnc.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Node API is running on port 3000')
    });
    
}).catch((error)=>{
    console.log(error)
})











