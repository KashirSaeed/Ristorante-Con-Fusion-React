import * as  ActionType  from "./ActionType"

export const Comments = (state={  errorMessage: null, comments: [] } , action) => {
    switch(action.type){
        case ActionType.Add_Comments: 
            return {...state , isLoading: false , errorMessage: null , comments: action.payload}
        
        case ActionType.Failed_Comments_Loading: 
            return {...state , isLoading: false , errorMessage: action.payload , comments: [] }

        case ActionType.Add_Comment:
            var comment = action.payload;
            return { ...state , comments: state.comments.concat(comment) }
        default:    
             return state
    }
}