import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js";

export const verifyToken = async(req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(createError(401, "You are not authenticated!"))
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(createError(403, "Invalid token!"));
        req.user = user;
        next()
    })
};

export const verifyUser = async(req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            if(err) return next(createError(403, "You are not authorized. Login before you can perform this operation!"))
        }
    })
}

export const verifyAdmin = async(req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "Access denied. Admin only."))
        }
    })
}