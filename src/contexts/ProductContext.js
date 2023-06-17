import { createContext, useEffect, useState } from "react";
import { database } from "../backend/database";

export const ProductContext = createContext();

const initDatabase = database;

export const ProductProvider = ({children}) => {

    const [ bookList, setBookList ] = useState([]);
    const [ searchBooks, setSearchBooks ] = useState("");

    const getBookList = () => {
        setBookList(initDatabase);    
    } 

    const updateByShelf = (bookID, shelfValue) => {
        const newBookList = bookList.map(book => book._id === bookID ? {...book, shelf: shelfValue} : book);
        setBookList(newBookList);
    }

    useEffect(()=>{
        getBookList();// eslint-disable-next-line
    }, [])

    return <ProductContext.Provider value={{ bookList, setBookList, getBookList, updateByShelf, searchBooks, setSearchBooks }}>
        {children}
    </ProductContext.Provider>
};