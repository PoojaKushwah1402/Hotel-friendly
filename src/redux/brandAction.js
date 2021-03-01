import { fetchrequest, fetchsuccess, fetchfailue } from "./action";

import  axios from "axios";

export const fetchBrand = () => {
    return function ( dispatch ) {

        dispatch(fetchrequest())
        axios.get('https://brands.free.beeceptor.com/')
        .then( response => {
            const brand = response
            dispatch(fetchsuccess(brand))
        })
        .catch( error => {
            dispatch(fetchfailue(error));
        } )

    }
}