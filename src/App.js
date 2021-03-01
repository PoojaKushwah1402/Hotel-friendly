import './App.css';
import React from 'react';
import "antd/dist/antd.css";
import { Provider } from "react-redux";

import store from "./redux/store";
import Hotelapp from "./Components";

const App = () => {
 
  return (
    <>
      <Provider store = {store} >
        <Hotelapp/>
      </Provider>
    </>
  )
};

export default App;
