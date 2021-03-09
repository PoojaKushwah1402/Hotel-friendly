import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import UserForm from "./Form";
import Heading from "./Heading";
import setStorage from "./setStorage";


function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("query") || ""
    };
  }

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
       <Switch>
              <Route exact path = { ["/","/:name", "/:name/:loaction"]}      
                render={(props)  => {
                    return <UserForm onSubmitForm={setDetails} {...props} />}}
             />
       </Switch>
       <Footer/>
       </>
    )

}



export default Hotelapp;