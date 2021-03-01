import { fetchrequest, fetchsuccess, fetchfailue } from "./action";
import { BRAND_NAME } from "./type";


import  axios from "axios";




export const fetchBrand = () => {
    return function ( dispatch ) {

        dispatch(fetchrequest(BRAND_NAME))
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const brand = response
            dispatch(fetchsuccess(brand, BRAND_NAME))
        })
        .catch( error => {
            dispatch(fetchfailue(error, BRAND_NAME));
        } )

    }
}