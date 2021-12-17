import Product from '../models/Product'


export const createProduct = async (req, res, next) =>{
    const {name, category, price, imgURL} = req.body
    
    const newProduct = new Product({name, category, price, imgURL})

    try{
        const productSaved = await newProduct.save()
        res.status(201).json(productSaved)
    }
    catch (error) {
        console.log(error);
        next();        
    }
}

export const getProducts = async (req, res, next) =>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
        
    } catch (error) {
        console.log(error);
        next(); 
    }
}

export const getProductById = async (req, res, next) =>{
    try {
        const product = await Product.find({_id: req.params.productId})
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        next(); 
    }    
}

export const updateProductById = async (req, res, next) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
            new: true
        })
        res.status(200).json(updatedProduct)
        
    } catch (error) {
        console.log(error);
        next(); 
    }  
}

export const deleteProductById = async (req, res, next) =>{
    try {
        const productDeleted = await Product.deleteOne({_id: req.params.productId})
        res.status(204).json('deleted')
        
    } catch (error) {
        console.log(error);
        next(); 
    }    
}