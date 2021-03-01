import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";



export const fetchrequest = () => {
    return{
        type : FETCH_REQUEST
    }
}


export const fetchsuccess = data => {
    return{
        type : FETCH_SUCCESS,
        payload : data,
        error : ''
    }
}


export const fetchfailue = error => {
    return{
        type : FETCH_FAILURE,
        payload : [],
        error : error.message
    }
}
