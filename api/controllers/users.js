import Users from "../models/users.js";
import {createError} from "../utils/error.js"

export const updateUserDetails = async(req, res, next) => {
    try{
        const user = await Users.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async(req, res, next) => {
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(err) {
        next(err)
    }
}

export const getUser = async(req, res, next) => {
    try{
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}

export const getUsers = async(req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "You are not authenticated!"))
    try{
        const users = await Users.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}