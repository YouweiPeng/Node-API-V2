require('dotenv').config()
const express = require('express');
const app = express();
const Product= require('./models/productModel')
const mongoose = require('mongoose');
const productRoute=require('./routes/ProductRoutes')
const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT || 3000
const errorMiddleware = require('./middleware/errorMiddleware')
var cors=require('cors')
//routes
app.use(cors)
app.use(express.json())


app.use('/api/product', productRoute)
app.get('/', (req, res) => {
    throw new Error('fake error')
});

app.get('/blog', (req, res) => {
    res.send('Hello blog my name is youwei')
});

app.use(errorMiddleware)
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);

    
    })
    console.log('MongoDB Connected')

}).catch(err => console.log(err));