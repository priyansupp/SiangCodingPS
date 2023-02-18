import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [User, setUser] = useState({});

    return (
        <UserContext.Provider value={{User, setUser}}>
            { children }
        </UserContext.Provider>
    )

}

