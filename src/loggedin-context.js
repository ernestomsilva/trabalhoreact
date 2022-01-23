import { createContext } from 'react';

export const IsLoggedInContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn:(isLoggedIn)=>{}
   
});