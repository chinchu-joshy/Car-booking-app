const { Router } = require('express');
const express=require('express');
const userHelpers = require('../Helpers/userHelpers');
const router=express.Router();
const userHelper=require('../Helpers/userHelpers')
router.post('/login',async(req,res)=>{
    console.log(req.body)
   
try{
    const user=await userHelper.LoginUser(req.body)
    if(user){
        res.send(user)
    }else{
        console.log("reached")
       return res.status(400).json(error)
    }

}catch(error){
    return res.status(400).json(error)
}
})
router.post('/register',async(req,res)=>{
   
    try{
        const user=await userHelper.RegisterUser(req.body)
        if(user){
            res.send(user)
        }else{
           return res.status(400).json(error)
        }
    
    }catch(error){
        return res.status(400).json(error)
    }
    })
    router.get('/checkuser/:id',async(req,res)=>{
        try{
           userHelper.isUserLoggedIn(req.params.id).then((response)=>{
               if(response.status===true){
                   res.send(response)

               }else{
                   res.status(401).send(response)

               }
           }) 


        }catch(err){
            res.status(401).send(err)

        }
    })
    module.exports=router;