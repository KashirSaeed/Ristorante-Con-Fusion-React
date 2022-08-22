import * as  ActionType  from "./ActionType";


export const Feedbacks = (state = {  feedbacks: [] }  , action) => {

    switch(action.type){
        case ActionType.Add_Feedback:
            return { ...state, feedbacks: action.payload }
        
        default:    
             return state
             
    }

}