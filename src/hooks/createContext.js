import React, { createContext, useContext, useState } from "react"

const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    updateItem: (item) => { },
    getItem: (id) => { },
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
    function getItem(id) {
        const item = items.find(item => item.id === id);
        return item;

    }

    return (
        <AppContext.Provider
       value={{
        items,
        getItem,
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