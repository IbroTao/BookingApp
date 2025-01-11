import express from "express"
import { deleteUser, getUser, getUsers, updateUserDetails } from "../controllers/users.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js"
import { createError } from "../utils/error.js";
const router = express.Router();

// TESTING ROUTES FOR USER AND ADMIN VERIFICATION
// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("hello, user is authenticated!")
// })

// router.get("/user/:id", verifyUser, (req, res, next) => {
//     const {username} = req.body;
//     if(!username) return next(createError(400, "Username is required!"))
//     res.send(`Hello ${username}, you are logged in!`)
// })

router.get("/admin/:id",  verifyAdmin, (req, res, next) => {
    res.send("Welcome Admin")
})

router.put("/:id", verifyUser, updateUserDetails);
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)
router.get("/", verifyAdmin, getUsers)

export default router;