import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";


const initialState = {
    loading : false,
    brand : [],
    error : ''
}


export const brandReducer = (state = initialState, action) => {

    switch(action.type) {

        case  FETCH_FAILURE :
            return {
                ...state,
                loading : true
            }
        case FETCH_SUCCESS : 
            return {
                ...state,
                loading : false,
                brand : action.payload,
                error : ''
            }
        case FETCH_REQUEST :
            return {
                ...state,
                loading : false,
                brand : [],
                error : action.error
            }
        default :  return state
    }
}