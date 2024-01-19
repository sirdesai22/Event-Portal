import { Router } from "express";
const fundRouter = Router();
import Fund from "../Models/Fund.js";
import Event from "../Models/Events.js";

fundRouter.post("/reducefund", async (req, res) => {
  const {fund, id} = req.body
  try {
    const updatedFundDocument = await Fund.findOneAndUpdate({}, { $set: { fund } }, { new: true });
    // const deletedEvent = await Event.findByIdAndDelete(id);
    const updatedEvent = await Event.findByIdAndUpdate(id, { $set: { approved: true } }, { new: true });
    // const fundDocument = await Fund.findOne({ /* Your query criteria */ });

    if (updatedFundDocument) {
      // const fundValue = fundDocument.fund;
      console.log(updatedFundDocument);
      console.log("Fund updated successfully")
    } else {
      res.status(404).json({ error: "Fund not found" });
    }

    if (updatedEvent) {
      // const fundValue = fundDocument.fund;
      console.log(updatedEvent);
      console.log("Event updated successfully")
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error fetching fund:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  
  console.log(fund)
});

fundRouter.get("/getfund", async (req, res) => {
  try {
    const fundDocument = await Fund.findOne({ /* Your query criteria */ });

    if (fundDocument) {
      const fundValue = fundDocument.fund;
      res.status(200).json({ fund: fundValue });
      console.log("Fund sent successfully")
    } else {
      res.status(404).json({ error: "Fund not found" });
    }
  } catch (error) {
    console.error("Error fetching fund:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default fundRouter;