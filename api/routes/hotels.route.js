import express from "express"
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, updateHotel } from "../controllers/hotels.js";
const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel)

// GET A HOTEL
router.get("/:id", async (req, res) => {
    
})

// GET ALL HOTELS
router.get("/", async (req, res, next) => {
    const failed = true;
    if (failed) return next(createError(401, "You are not authenticated!"))

    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
})

export default router;