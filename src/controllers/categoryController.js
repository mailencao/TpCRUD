import bodyParser from 'body-parser';
const { json } = bodyParser;
import Category from "../models/categoryModel.js";

export const getAll = async (req, res) => {
    try{
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(404).json({message: "no existen categorias"});
        }
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
}; 

export const getFindOne = async (req, res) => {
    try{ 
        const nombre = req.params.nombre
        const category = await Category.findOne({ nombre: nombre });
        if (!category) {
            return res.status(404).json({message:  `La categoria no existe`});
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

export const create = async (req, res) => {
    try {
        const categoryExist = await Category.findOne({ nombre: req.body.nombre });
        if(categoryExist){
            return res.status(400).json({message: `La categoria ya existe`})
        }
        const categoryData = new Category({ nombre: req.body.nombre });
        const savedCategory = await categoryData.save();
         res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    };
};

export const update = async (req, res) => {
    try{
        const id = req.params.id;
        const categoryExist = await Category.findOne({ _id: id });
        if(!categoryExist) {
            return res.status(404).json({message: "La categoria no existe"});
        }
        const updeteCategory = await Category.findByIdAndUpdate({ _id: id }, req.body, { 
            new: true 
        });
        res.status(201).json({messaje: "La categoria fue actualizada", updeteCategory});
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

export const deleteCategory = async (req, res) => {
    try{
        const _id = req.params.id;
        const categoryExist = await Category.findOne({ _id });
        if(!categoryExist) {
            return res.status(404).json({message: `La categoria no existe`});
        }
        await Category.findByIdAndDelete(_id)
        res.status(201).json({messaje: `La categoria fue eliminada`})
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};