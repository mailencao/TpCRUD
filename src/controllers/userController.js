import bodyParser from 'body-parser';
const { json } = bodyParser;
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: `El email "${email}", ya se encuentra en uso`})
        }
        const savedUser = await userData.save();
        const { clave, ... rest } = savedUser;
        res.status(200).json(rest);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    };
};

export const get = async (req, res) => {
    try{ 
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "no existen usuarios" });
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
}; 

export const update = async (req, res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
        if(!userExist) {
            return res.status(404).json({message: "El usuario no existe"});
        }
        const updeteUser = await User.findByIdAndUpdate({ _id: id }, req.body, { 
            new: true 
        });
        res.status(201).json(updeteUser);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};


export const deleteUser = async (req, res) => {
    try{
        const _id = req.params.id;
        const userExist = await User.findOne({ _id });
        if(!userExist) {
            return res.status(404).json({message: "El usuario no existe" });
        }
        await User.findByIdAndDelete(_id)
        res.status(201).json({messaje: "Usurario eliminado"})
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

export const validar = async (req, res) => {
    try{
        const userFound = await User.findOneAndDelete({ email: req.body.email });
        if(!userFound){
            res.status(400).json({ message:"El email y/o la contraseña son incorrectos" })
        };
        if(bcrypt.compareSync(req.body.clave, userFound.clave)){
            return true
        } else {
            res.json({ message:"El email y/o la contraseña son incorrectos" });
            return
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};