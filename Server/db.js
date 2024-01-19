import mongoose from "mongoose";
const MONGO_URI = "mongodb://127.0.0.1:27017/KLE";
import Fund from "./Models/Fund.js";

mongoose.connect(MONGO_URI).then(console.log("Connected to database"));

try {
    // Check if an initial fund document already exists
    const existingFund = await Fund.findOne();

    if (!existingFund) {
      // If no existing fund document, create and save the initial fund document
      const initialFund = new Fund({
        fund: 100000, // Initial value for the 'fund' field
      });

      await initialFund.save();
      console.log("Initial fund value saved");
    } else {
      console.log("Initial fund document already exists");
    }
  } catch (error) {
    console.error("Error checking or saving initial fund:", error);
  }