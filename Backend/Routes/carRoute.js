
const express=require('express');
const carHelper = require('../Helpers/userHelpers');
const router=express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the club");
  });
  router.get("/data", (req, res) => {
    const data = ["tata", "moto","tata", "moto","tata", "moto","tata", "moto"];
    res.send(data);
  });



module.exports=router;