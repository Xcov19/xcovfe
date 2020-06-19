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
