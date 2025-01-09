import express from "express"
import Hotel from "../models/hotels";
const router = express.Router();

// CREATE 
router.post(":id?limit=5", async (req, res) => {
    const hotel = new Hotel(req.body); 
    try{

    }catch(err){
        res.status(500).json(err);
    }
})


export default router;