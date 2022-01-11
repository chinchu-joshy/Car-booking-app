const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute=require('./Routes/usersRoute')
const carRoute=require('./Routes/carRoute')
dotenv.config();
mongoose.connect(
  process.env.MONGO,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to mongodb");
  }
);
app.use(cors({
  
  origin:['http://localhost:3000'],
  credentials:true
}))
app.use(express.json())





app.use('/',userRoute)
app.use('/car',carRoute)
app.listen(process.env.PORT || "5000", () => {
  console.log("Connected");
});
