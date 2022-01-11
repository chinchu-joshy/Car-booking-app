
import axios from 'axios'

import { message } from 'antd'
import { useNavigate } from 'react-router-dom'



export const userLogin=(reqObj)=>async dispatch=>{
    // const navigate=useNavigate()
    
    dispatch({type:"LOADING",payload:true})
    try{
        const response=await axios.post('http://localhost:5000/login',reqObj)
        if(response.data.status===true){
           
            localStorage.setItem('user',JSON.stringify(response.data.user._id))
            message.success('Login success')
            setTimeout(() => {
                window.location.href='/'
                
            }, 500);
       
        dispatch({type:"LOADING",payload:false})
        // navigate('/')
       

        }else{
            message.error("Wrong password or email")
        }
       
    
    }catch(err){
        console.log(err)
       message.error("Something went wrong")
        dispatch({type:"LOADING",payload:true})
    }
    
    }

    export const userRegister=(reqObj)=>async dispatch=>{
    
        const navigate=useNavigate()
        dispatch({type:"LOADING",payload:true})
        if(reqObj.password!=reqObj.cppassword) return message.error("Password not matching")
        try{
            const response=await axios.post('http://localhost:5000/register',reqObj)
            
            if(response.data.status===true){
                message.success('Registeration successfull')
                setTimeout(()=>{
                   
                    window.location.href='/login'
                },500)
               
                dispatch({type:"LOADING",payload:false})
               
                // navigate('/')

            }else{
                message.error("Something went wrong")

            }
          
            
        
        }catch(err){
            message.error("Something went wrong")
            dispatch({type:"LOADING",payload:true})
        }
        
        }
        export const checkUser=()=>async dispatch=>{

            dispatch({type:"LOADING",payload:true})
       
        try{
            const data=JSON.parse(localStorage.getItem('user'))
           if(data){
          
           



            const response=await axios.get(`http://localhost:5000/checkuser/${data}`)
            
            if(response.data.status===true){
               dispatch({type:"GET_USER",payload:response.data.user})
               
                dispatch({type:"LOADING",payload:false})
               
            

            }else{
                message.error("Something went wrong")

            }
        }else{
            dispatch({type:"LOADING",payload:false})

        }
               
           
            
          
          
            
        
        }catch(err){
            message.error("Something went wrong")
            dispatch({type:"LOADING",payload:true})
        }
        

        }
    //    export const resetValue=()=>async dispatch=>{
    //         try{
    //             dispatch({type:"LOADING",payload:false})

    //         }catch(error){

    //         }
    //     }