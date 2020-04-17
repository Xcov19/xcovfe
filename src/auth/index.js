import createAuth0Client from '@auth0/auth0-spa-js';

let isUserAuthenticated = false;
let userData = {};
let auth0FromHook = {};

export const isAuthenticated = () => {
  return isUserAuthenticated;
};

export const setIsAuthenticated = (value) => {
  isUserAuthenticated = value;
};

export const user = () => {
  return userData;
};

export const setUser = (data) => {
  userData = data;
};

export const auth0 = () => {
  return auth0FromHook;
};

export const initAuth0 = async () => {
  auth0FromHook = await createAuth0Client({
    domain: 'dev-3hggt8k0.auth0.com',
    client_id: 'OEyREy5ElWqlksdT1uvAzk6Si4n2J8A6',
    redirect_uri: window.location.origin,
    cacheLocation: 'localstorage',
  })

  console.log(auth0FromHook)

  isUserAuthenticated = await auth0FromHook.isAuthenticated();

  if (isUserAuthenticated) {
    userData = await auth0FromHook.getUser();
  }

  return false;
}
