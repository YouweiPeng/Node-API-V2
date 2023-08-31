const Product= require('../models/productModel')
const asyncHandler = require('express-async-handler')
//get all product
const getProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

//get product by id with error middleware applied
const getProductById = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//create product
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

// update product

const UpdateProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message:'can not find the product in database'})
        }
        const p = await Product.findById(id)
        res.status(200).json(p)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

//delete product 

const deleteProduct = async(req,res)=>{

    try {
        const {id}=req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:'can not find the product in database'})
        }
        return res.status(200).json({message:`product with id ${id} is already deleted`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

module.exports={
    getProducts,
    getProductById,
    createProduct,
    UpdateProduct,
    deleteProduct,


}