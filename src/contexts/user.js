import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [user, setUser] = useState('Anonomous');

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        );
};