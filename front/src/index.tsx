import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  // PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult } from '@azure/msal-browser';
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

import config from './Config';
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";



// const msalInstance = new PublicClientApplication({
//   auth: {
//     clientId: config.appId,
//     redirectUri: config.redirectUri
//   },
//   cache: {
//     cacheLocation: 'sessionStorage',
//     storeAuthStateInCookie: true
//   }
// });

// // Check if there are already accounts in the browser session
// // If so, set the first account as the active account
// const accounts = msalInstance.getAllAccounts();
// if (accounts && accounts.length > 0) {
//   msalInstance.setActiveAccount(accounts[0]);
// }

// msalInstance.addEventCallback((event: EventMessage) => {
//   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
//     // Set the active account - this simplifies token acquisition
//     const authResult = event.payload as AuthenticationResult;
//     msalInstance.setActiveAccount(authResult.account);
//   }
// });
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
        <App  />
        </Provider>
       
    </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))



