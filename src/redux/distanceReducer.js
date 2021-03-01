import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";


const initialState = {
    loading : false,
    distance : [],
    error : ''
}


export const distanceReducer = (state = initialState, action) => {

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
                distance : action.payload,
                error : ''
            }
        case FETCH_REQUEST :
            return {
                ...state,
                loading : false,
                distance : [],
                error : action.error
            }
        default :  return state
    }
}