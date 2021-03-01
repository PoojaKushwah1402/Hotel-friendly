import { fetchrequest, fetchsuccess, fetchfailue } from "./action";

import  axios from "axios";

export const fetchDistance = () => {
    return function ( dispatch ) {

        dispatch(fetchrequest())
        axios.get('https://distance.free.beeceptor.com/')
        .then( response => {
            const brand = response
            dispatch(fetchsuccess(brand))
        })
        .catch( error => {
            dispatch(fetchfailue(error));
        } )

    }
}