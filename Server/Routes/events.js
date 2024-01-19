import { Router } from "express";
const router = Router();
import Event from "../Models/Events.js";

router.post('/addevent', async (req, res) => {
    try {
      const { name, description, date, funds } = req.body;
      const newEvent = new Event({ name, description, date, funds, approved:false });
  
      await newEvent.save();
      res.json(newEvent);
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.get("/allevents", async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.json(allEvents);
    console.log("first1")
  } catch (error) {
    console.error("Error fetching all events:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;