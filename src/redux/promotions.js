import * as  ActionType  from "./ActionType"


export const Promotions = (state = { isLoading: true, errorMessage: null, promotions: [] }, action) => {
    switch (action.type) {
        case ActionType.Add_Promotions:
            return { ...state, isLoading: false, errorMessage: null, promotions: action.payload }
        case ActionType.Load_Promotions:
            return { ...state, isLoading: true, errorMessage: null, promotions: [] }
        case ActionType.Failed_Promotions_Loading:
            return { ...state, isLoading: false, errorMessage: action.payload, promotions: [] }

        default:
            return state
    }
}