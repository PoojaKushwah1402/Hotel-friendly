import { fetchrequest, fetchsuccess, fetchfailue } from "./action";
import { DISTANCE_NAME } from "./type";

import  axios from "axios";




export const fetchDistance = () => {

    return function ( dispatch ) {

        dispatch(fetchrequest(DISTANCE_NAME))
        axios.get('https://jsonplaceholder.typicode.com/posts')
        
        .then( response => {
            const brand = response
            dispatch(fetchsuccess(brand, DISTANCE_NAME))
        })
        .catch( error => {
            dispatch(fetchfailue(error, DISTANCE_NAME));
        } )

    }
}