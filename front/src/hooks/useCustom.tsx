import {useState} from "react"
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
const configuration: Configuration = {
    auth: {
        clientId: "892b55ac-991c-4cab-ac8f-453adc364567"
    },
    
};


export default () => {
	const [token ,setToken] = useState<string>();
    const toggleTheme = async() => {
        const msalInstance = new PublicClientApplication(configuration);
		const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
    const accounts = msalInstance.getAllAccounts();
    const request = {
        scopes: ["User.Read"],
        account: activeAccount || accounts[0]
    };

    const authResult = await msalInstance.acquireTokenSilent(request);
    setToken(authResult.accessToken)
    };
   toggleTheme();
	// useEffect(() => {
	// 	const localTheme = localStorage.getItem("theme");
	// 	if (localTheme) {
	// 		setTheme(localTheme);
	// 	}
	// }, {});

	return {
		token,
        toggleTheme
	};
};
