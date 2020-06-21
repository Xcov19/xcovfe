let isUserAuthenticated = false;
const USERNAME_KEY = 'username__001';
export const getUsername = () => localStorage.getItem(USERNAME_KEY);
export const setUsername = str => localStorage.setItem(USERNAME_KEY, str);

export const isAuthenticated = () => {
  return isUserAuthenticated;
};

export const setIsAuthenticated = (value) => {
  isUserAuthenticated = value;
};
