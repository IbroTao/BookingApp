import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.route.js"
import roomsRoute from "./routes/rooms.route.js"
import usersRoute from "./routes/users.route.js"
import hotelsRoute from "./routes/hotels.route.js"
const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/booking');
        console.log("Connected to mongoDB.")
    } catch(error) {
        throw error;
    }
};

// ONLY USE THE FUNCTION BELOW TO KNOW THE PROBLEM WHEN CONNECTION TO THE DATABASE FAILS
// mongoose.connection.on("disconnected", () => {
//     console.log("mongoDB is disconnected!")
// })

// MIDDLEWARES
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/hotels", hotelsRoute)

app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to backend.")
    console.log(`Website is running on PORT ${process.env.PORT}`)
})

