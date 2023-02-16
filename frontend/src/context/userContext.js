import React from "react";
import { createContext, useState } from "react";

export const IsCustomerContext = createContext();

export const IsCustomerContextProvider = (children) => {

    const [IsCustomer, setIsCustomer] = useState(0);

    return (
        <IsCustomerContext.Provider value={{IsCustomer, setIsCustomer}}>
            { children }
        </IsCustomerContext.Provider>
    )

}

