const User=require('../Modal/userModel')
const mongoose=require('mongoose')
var objId = mongoose.Types.ObjectId;
module.exports={
    LoginUser:(data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                const username=data.username
                const password=data.password
                const val=await User.findOne({username,password})
                if(val){
                    resolve({user:val,status:true})
                }else{
                    resolve({status:false})
                }

            }catch(error){
                reject({status:false})
            }
        })
    },
    RegisterUser:(data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                const newUser=new User(data)
               await newUser.save()
               if(newUser){
                   resolve({status:true})
               }
            }catch(error){
                reject({status:false})
            }
        })
    },
    isUserLoggedIn:(data)=>{
        
        return new Promise(async(resolve,reject)=>{
            try{
                const user=await User.findOne({_id:objId(data)})
                if(user){
                    resolve({user,status:true})

                }
                else{
                    resolve({status:false})  
                    console.log("failed")
                }
               
                

            }catch(error){
                reject("something went wrong")
               
            }
        })

    }
}