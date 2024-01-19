import express from 'express'
const app = express()
const PORT = 3000
import eventRoutes from './Routes/events.js';
import fundRouter from './Routes/fund.js';

import cors from 'cors'
app.use(cors())
app.use(express.json());
import "./db.js"

app.use("/", eventRoutes);
app.use("/", fundRouter);


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})