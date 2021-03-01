import './App.css';
import React from 'react';
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


import store from "./redux/store";
import Hotelapp from "./Components";

const App = () => {
 
  return (
    <BrowserRouter>
      <Provider store = {store} >
        <Hotelapp/>
      </Provider>
      </BrowserRouter>
  )
};

export default App;
