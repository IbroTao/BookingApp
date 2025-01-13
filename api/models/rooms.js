import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    roomNumbers: [{ 
        number: Number,
        unavailableDates: {
            type: [Date]
        }
    }]
}, {
    timestamps: true
});


[
    // {number: 101, unavailableDates: [01-01-2025,02-01-2025]}
]

export default mongoose.model("rooms", RoomSchema)