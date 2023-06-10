import React, { useState } from "react";
import {
  PublicClientApplication,
  AuthenticationResult,
} from "@azure/msal-browser";
import axios from "axios";

const msalConfig = {
  auth: {
    clientId: "<your-client-id>",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.length < 3) {
      // Minimum 3 characters are required to search
      return;
    }

    try {
      const response: AuthenticationResult =
        await msalInstance.acquireTokenSilent({
          scopes: ["https://graph.microsoft.com/.default"],
        });

      const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${searchTerm}')`;

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

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        value={searchTerm}
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
