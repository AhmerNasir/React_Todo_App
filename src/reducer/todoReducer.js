
const initialData ={
    list : [],

}

const todoReducer = (state =initialData, action) => {
  
 switch(action.type){
     case "ADDTODO":
         const  {id,data} =action.payload;
         return {
             ...state,
             list:[
                ...state.list, 
                {
                    id: id,
                   data: data 
             }
            ]

            // 
         }
         case "DELETETODO":
       const newlist = state.list.filter((elem)=> elem.id !==action.id);
         return {
             ...state,
             list : newlist
            // 
         }


         case "REMOVEALL":
             return{
                 ...state,
                 list : []
             }

         default : return state;
 }


            
    
}
export default todoReducer;