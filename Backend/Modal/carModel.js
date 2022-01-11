const mongoose=require("mongoose");
const carSchema=new mongoose.Schema({
    name:{type:String,required:true},
    Image:{type:String,required:true},
    capacity:{type:Number,required:true},
    fuel:{type:String,required:true},
    bookedTimeSlots:[{
        from:{type:Number,required:true},
        to:{type:Number,required:true}
    }
    ],
    rentPerHour:{type:Number,required:true}


},{timestamps:true})
const Car=mongoose.model('car',carSchema);
module.exports=Car;