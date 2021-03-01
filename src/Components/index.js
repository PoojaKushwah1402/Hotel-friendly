import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import UserForm from "./Form";
import Heading from "./Heading";
import setStorage from "./setStorage";


const Hotelapp = () => {

    const [details,setDetails] = React.useState({});

    React.useEffect(()=>{
        console.log(1);
        setStorage(details)
    },[details]);

    return(
        <>
       <Header/>
       <Heading/>
       <UserForm onSubmitForm={setDetails} />
       <Footer/>
       </>
    )

}

export default Hotelapp;