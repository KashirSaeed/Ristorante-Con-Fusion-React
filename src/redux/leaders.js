import * as  ActionType  from "./ActionType"

export const Leaders = (state = { isLoading: true, errorMessage: null, leaders: [] }  , action) => {
    switch(action.type){
        case ActionType.Add_Leaders:
            return { ...state, isLoading: false, errorMessage: null, leaders: action.payload }
        case ActionType.Load_Leaders:
            return { ...state, isLoading: true, errorMessage: null, leaders: [] }
        case ActionType.Failed_Leaders_Loading:
            return { ...state, isLoading: false, errorMessage: action.payload, leaders: [] }
        default:    
             return state
             
    }
}
