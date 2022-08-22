import * as  ActionType  from "./ActionType"
import { DISHES } from '../shared/dishes';
import { baseURL } from "../shared/baseURL";

export const addComment = (comment) => ({
    type: ActionType.Add_Comment,
    payload: comment
}) 

export const addFeedback = (feedback) => ({
    type: ActionType.Add_Feedback,
    payload: feedback
}) 

export const postFeedback = (firstname , lastname , telnum , email , agree , contactType , message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email, 
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseURL+"feedback" , {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    } )
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(feedback => dispatch(addFeedback(feedback)))
        .catch(error => { 
            console.log("post comment:  " + error.message)
            alert("Your feedback could not be submitted\nError:  "+error.message)   } )
        
}

export const postComment = (dishId , rating , author , comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment 
    }
    newComment.date = new Date().toISOString();

    return fetch(baseURL+"comments" ,{
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
        
    } )
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { 
            console.log("post comment:  " + error.message)
            alert("Your comment could not be posted\nError:  "+error.message)   } )
        
}

export const fetchDishes = () => (dispatch) => {
    dispatch(loadDishes(true));

    return fetch(baseURL + 'dishes' )
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch( error => dispatch(FailedLoadingDishes(error.message)) )

}

export const addDishes = (dishes) => ({
    type: ActionType.Add_Dishes,
    payload: dishes
})

export const loadDishes = () => ({
    type: ActionType.Load_Dishes
})

export const FailedLoadingDishes = (errorMessage) => ({
    type: ActionType.Failed_Dishes_Loading,
    payload: errorMessage

})


export const fetchPromotions = () => (dispatch) => {
    dispatch(loadPromotions(true));

    return fetch(baseURL + 'promotions' )
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch( error => dispatch(FailedLoadingPromotions(error.message)) )
    
}

export const addPromotions = (promotions) => ({
    type: ActionType.Add_Promotions,
    payload: promotions
})

export const loadPromotions = () => ({
    type: ActionType.Load_Promotions
})

export const FailedLoadingPromotions = (errorMessage) => ({
    type: ActionType.Failed_Promotions_Loading,
    payload: errorMessage

})

export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments' )
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch( error => dispatch(FailedLoadingComments(error.message)) )
 
}

export const addComments = (comments) => ({
    type: ActionType.Add_Comments,
    payload: comments
})



export const FailedLoadingComments = (errorMessage) => ({
    type: ActionType.Failed_Comments_Loading,
    payload: errorMessage

})

export const fetchLeaders = () => (dispatch) => {

    dispatch(loadLeaders(true));

    return fetch(baseURL+"leaders")
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error = new Error("Error  "+response.status+": " + response.statusText)
                error.response = response;
                throw error;
            }
        } , error=>{
                var errMsg = new Error(error.message)
                throw errMsg;
        } )
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch( error => dispatch(FailedLoadingLeaders(error.message)) )
}

export const addLeaders = (leaders) => ({
    type: ActionType.Add_Leaders,
    payload: leaders
})

export const loadLeaders = () => ({
    type: ActionType.Load_Leaders
})

export const FailedLoadingLeaders = (errorMessage) => ({
    type: ActionType.Failed_Leaders_Loading,
    payload: errorMessage

})


