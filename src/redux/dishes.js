// import { DISHES } from '../shared/dishes';
import * as  ActionType  from "./ActionType"


export const Dishes = (state={ isLoading: true , errorMessage: null , dishes: []  } , action) => {
    switch(action.type){
        case ActionType.Add_Dishes: 
            return {...state , isLoading: false , errorMessage: null , dishes: action.payload}
        case ActionType.Load_Dishes: 
            return {...state , isLoading: true , errorMessage: null , dishes: []}
        case ActionType.Failed_Dishes_Loading: 
            return {...state , isLoading: false , errorMessage: action.payload , dishes: [] }


        default:    
             return state
    }
}