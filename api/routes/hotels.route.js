import express from "express"
import Hotel from "../models/hotels.js";
const router = express.Router();

// CREATE 
router.post(":id?limit=5", async (req, res) => {
    const newHotel = new Hotel(req.body); 
    try{
        const savedHotel = await newHotel.save();

    }catch(err){
        res.status(500).json(err);
    }
})


export default router;