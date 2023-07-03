import React, { useState } from "react";
import {
  PublicClientApplication,
  AuthenticationResult,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import axios from "axios";

const msalConfig = {
  auth: {
    clientId: "4403f56c-00c9-461f-7604-5ef734d09ad9",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const SearchComponent: React.FC = () => {
  //const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setSearchTerm(event.target.value);
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (query.length < 3) {
      //   // Minimum 3 characters are required to search
      return;
    }

    try {
      const response: AuthenticationResult =
        await msalInstance.acquireTokenSilent({
          scopes: ["https://graph.microsoft.com/v1.0/me"],
        });

      //const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${searchTerm}')`;
      const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${query}')`;

      const result = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${response.accessToken}`,
        },
      });

      setSearchResults(result.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSearch = async () => {
  //   if (query.length < 3) {
  //     // Minimum 3 characters are required to search
  //     return;
  //   }
  //   try {
  //     const accounts = msalInstance.getAllAccounts();
  //     if (accounts.length === 0) {
  //       // No active account available, initiate interactive sign-in
  //       const authResponse = await msalInstance.loginPopup({
  //         scopes: ["https://graph.microsoft.com/user.read"],
  //       });
  //       // Retrieve the acquired access token
  //       const response = authResponse.accessToken;
  //       await fetchSearchResults(response);
  //     } else {
  //       // Set the first available account as the active account
  //       msalInstance.setActiveAccount(accounts[0]);
  //       try {
  //         // Try to acquire token silently
  //         const response: AuthenticationResult =
  //           await msalInstance.acquireTokenSilent({
  //             scopes: ["https://graph.microsoft.com/user.read"],
  //           });
  //         await fetchSearchResults(response.accessToken);
  //       } catch (error: any) {
  //         if (error.name === "InteractionRequiredAuthError") {
  //           // Handle the case when silent token acquisition fails due to interaction required
  //           console.log(
  //             "Silent token acquisition failed. Initiating interactive sign-in."
  //           );
  //           const authResponse = await msalInstance.loginPopup({
  //             scopes: ["https://graph.microsoft.com/user.read"],
  //           });
  //           // Retrieve the acquired access token
  //           const response = authResponse.accessToken;
  //           await fetchSearchResults(response);
  //         } else {
  //           console.log(error);
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const fetchSearchResults = async (accessToken: string) => {
  //   try {
  //     const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${query}')`;

  //     const result = await axios.get(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     setSearchResults(result.data.value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        //value={searchTerm}
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
};

export default SearchComponent;
