import { createStore , combineReducers , applyMiddleware } from "redux";
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Feedbacks } from "./feedbacks";
import { InitailFormFeedback } from "./InitialFeedback";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
            comments: Comments,
            feedback: Feedbacks,
            ...createForms({
                feedback:  InitailFormFeedback
            })
        }),
        applyMiddleware(thunk , logger)
    );
    return store;
}

