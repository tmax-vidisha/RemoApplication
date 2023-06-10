import { PublicClientApplication } from '@azure/msal-browser';

const getAccessToken = async () => {
  const msalConfig = {
    auth: {
      clientId: 'your-client-id',
      redirectUri: 'http://localhost:3000' // Replace with your redirect URI
    }
  };

  const msalInstance = new PublicClientApplication(msalConfig);

  const loginRequest = {
    scopes: ['user.read', 'files.read.all'] // Add the necessary scopes for accessing OneDrive
  };

  try {
    const response = await msalInstance.loginPopup(loginRequest);
    const accessToken = response.accessToken;
    return accessToken;
  } catch (error) {
    console.log(error);
    return null;
  }
};
