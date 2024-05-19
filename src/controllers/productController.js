import bodyParser from 'body-parser';
const { json } = bodyParser;
import Product from "../models/productModel.js"

export const create = async (req, res) => {
    try {
        const productData = new Product(req.body);
        const {nombre} = productData;
        const productExist = await Product.findOne({nombre});
        if(productExist){
            return res.status(400).json({message: `El producto "${nombre}", ya existe`})
        }
        const savedProduct = await productData.save();
         res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    };
};

export const get = async (req, res) => {
    try{ 
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(404).json({message: "no existen productos"});
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
}; 

export const update = async (req, res) => {
    try{
        const id = req.params.id;
        const productExist = await Product.findOne({_id: id});
        if(!productExist) {
            return res.status(404).json({message: "El producto no existe"});
        }
        const updeteProduct = await Product.findByIdAndUpdate({ _id: id }, req.body, { 
            new: true 
        });
        res.status(201).json(updeteProduct);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

export const deleteProduct = async (req, res) => {
    try{
        const _id = req.params.id;
        const productExist = await Product.findOne({ _id });
        if(!productExist) {
            return res.status(404).json({message: "El producto no existe"});
        }
        await Product.findByIdAndDelete(_id)
        res.status(201).json({messaje: "Producto eliminado"})
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};