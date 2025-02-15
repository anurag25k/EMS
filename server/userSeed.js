import bcrypt from 'bcrypt';
import 'dotenv/config';
import mongoose from 'mongoose';
import User from './models/User';
import connectToDatabase from "./db/db"

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Stop the script if connection fails
    }
};

const userRegister = async () => {
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        
        // Check if admin already exists
        const existingUser = await User.findOne({ email: "admin@gmail.com" });
        if (existingUser) {
            console.log("Admin user already exists.");
            return;
        }

        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        await newUser.save();
        console.log("Admin user registered successfully!");
    } catch (error) {
        console.error("Error registering user:", error);
    } finally {
        mongoose.connection.close(); // Close DB connection after execution
    }
};

// Connect to DB first, then run the script
connectDB().then(userRegister);
