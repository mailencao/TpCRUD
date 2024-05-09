import user from "../models/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = new user(req.body);
        const {email} = userData;
        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({message: `email: "${email}", existente`})
        }
        const savedUser = await userData.save()
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({error: "error en el servidor"});
    };
};