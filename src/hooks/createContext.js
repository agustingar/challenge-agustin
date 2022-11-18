import React, { createContext, useContext, useState } from "react"

const AppContext = createContext({
    createItem: (item) => { },
    updateItem: (item) => { },
})
export default function Store({ children }) {
    const [items, setItems] = useState([]);

    function createItem(item) {
        const temp = [...items];
        temp.push(item);
        setItems(temp);
    } 
    function updateItem(item) {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];

        temp[index] = { ...item };
    }

    return (
        <AppContext.Provider
       value={{
        createItem,
        updateItem,
       }}
        >
            {children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext);
}