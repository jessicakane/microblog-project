import { createContext, useState } from "react";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const[userID, setUserID] = useState(localStorage.getItem('userID') || false);

    


  return (
    <AuthContext.Provider value = {{userID, setUserID}}>
        {children}
    </AuthContext.Provider>
  )
}


export {AuthContext};