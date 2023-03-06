import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
const configuration: Configuration = {
    auth: {
        clientId: "892b55ac-991c-4cab-ac8f-453adc364567"
    },
    
};
export const myAsync = async (): Promise<any | any> => {
    const msalInstance = new PublicClientApplication(configuration);
		const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
    const accounts = msalInstance.getAllAccounts();
    const request = {
        scopes: ["User.Read"],
        account: activeAccount || accounts[0]
    };

    const authResult = await msalInstance.acquireTokenSilent(request);
    const response =  authResult.accessToken
    return response
}