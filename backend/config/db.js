const mongoose = require("mongoose");
require('dotenv').config();
const { MONGODB_URI } = process.env;

let isConnected;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be defined");
}
const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        const connect = await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log(`Connected to MongoDB Database: ${connect.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connectDB;
