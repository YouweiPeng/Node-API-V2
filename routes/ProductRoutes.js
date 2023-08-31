const express = require('express');
const Product= require('../models/productModel')
const router =express.Router();
const {getProducts,
       getProductById,
       createProduct, 
       UpdateProduct,
       deleteProduct}=require('../controller/productController')


router.get('/'  , getProducts)

router.get('/:id'  , getProductById)

router.post('/',  createProduct)

router.put('/:id',UpdateProduct)

router.delete('/:id', deleteProduct)

module.exports=router;