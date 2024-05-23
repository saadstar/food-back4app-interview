import { createContext, useState } from "react";
import { food_list } from "./food_list";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [categoryItems, setCategoryItems] = useState({});
    
    const contextValue ={food_list}
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
