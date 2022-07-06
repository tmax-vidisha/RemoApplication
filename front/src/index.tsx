import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

// MSAL configuration
export const configuration: Configuration = {
    auth: {
        clientId: "892b55ac-991c-4cab-ac8f-453adc364567"
    },
    
};

const pca = new PublicClientApplication(configuration);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MsalProvider instance={pca}>
    <Provider store = {store}>
        <App />
        </Provider>
       
    </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))



