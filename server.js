const express = require('express');
const app = express();
const Product= require('./models/productModel')
const mongoose = require('mongoose');
//routes
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello Node')
});

app.get('/blog', (req, res) => {
    res.send('Hello blog my name is youwei')
});


app.get('/product'  , async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.post('/product',  async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

mongoose.
connect('mongodb+srv://990907pyw:990907PYWpyw.@cluster0.cududuj.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    
    })
    console.log('MongoDB Connected')

}).catch(err => console.log(err));