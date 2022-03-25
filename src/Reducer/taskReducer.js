
let initialvalue = [];
let taskReducer = (state = initialvalue, action) =>{
    switch(action.type){
        case "ADD_TASK" :{
           return [...state,action.payload];
        }
        case "DELETE_TASK" :{
            let newState = state.filter((element) =>{
                if(element.id!==action.payload){
                    return element;
                }
            });

            state =newState;
            
            return state;
        }
        default:{
            return state;
        }
    }
}

export default taskReducer;