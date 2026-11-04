require("dotenv").config(); // Load environment variables from .env file
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
       
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        //console.log("MongoDB connected...");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;