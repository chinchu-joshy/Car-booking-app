const initialData={
    user:{}
}
export const usersReducer=(state=initialData,action)=>{
    console.log(action.type)
    switch(action.type){
       
        case "GET_USER":return {
            ...state,user:action.payload

        }
        case "RESET_USER":return {
          
         ...state,user:{}
        }
        default :return state
    }
}