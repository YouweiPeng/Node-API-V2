require('dotenv').config()
const express = require('express');
const app = express();
const Product= require('./models/productModel')
const mongoose = require('mongoose');
const productRoute=require('./routes/ProductRoutes')
const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT || 3000

//routes
app.use(express.json())
app.use('/api/product', productRoute)
app.get('/', (req, res) => {
    res.send('Hello Node')
});

app.get('/blog', (req, res) => {
    res.send('Hello blog my name is youwei')
});



mongoose.
connect(MONGO_URL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);

    
    })
    console.log('MongoDB Connected')

}).catch(err => console.log(err));