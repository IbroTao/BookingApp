import express from "express"
import { deleteUser, getUser, getUsers, updateUserDetails } from "../controllers/users.js";
import {verifyToken, verifyUser} from "../utils/verifyToken.js"
import { createError } from "../utils/error.js";
const router = express.Router();


router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send("hello, user is authenticated!")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    const {username} = req.body;
    if(!username) return next(createError(400, "Username is required!"))
    res.send(`Hello ${username}, you are logged in!`)
})

router.put("/:id", updateUserDetails);
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getUsers)

export default router;