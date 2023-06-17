import { useContext, useEffect } from "react";
import Layout from "../../Layouts/Layout";
import { ProductContext } from "../../../contexts/ProductContext";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { useNavigate } from "react-router-dom";
import './SearchPage.css'

const SearchPage = () => {
    const { searchBooks, setSearchBooks, bookList } = useContext(ProductContext);
    const navigate = useNavigate();

    useEffect(()=> {
        setSearchBooks("");// eslint-disable-next-line
    }, [])

    const searchInputChangeHandler = (event) => {
        setSearchBooks(event.target.value);
    }

    const getSearchBookList = () => {
        if(searchBooks.length === 0){
            return bookList;
        }else{
            return bookList.filter(({author, title, categoryName}) => (author.toLowerCase().indexOf(searchBooks.trim().toLowerCase()) !== -1 || title.toLowerCase().indexOf(searchBooks.trim().toLowerCase()) !== -1 || categoryName.toLowerCase().indexOf(searchBooks.trim().toLowerCase()) !== -1));
        }
    }

    return <Layout>
        <h2 onClick={()=>navigate('/')} className="searchpage-home heading2">Go To Main Page</h2>
        <div className="searchpage-input-div">
                <input 
                type="text" 
                value={searchBooks} onChange={searchInputChangeHandler} className="searchpage-input"
                placeholder="Enter an author, title or genre...."/>
        </div>
        <h3>Books not in library</h3>
        <div className="homepage-section">
            <ProductListCard bookList={getSearchBookList().filter(({shelf}) => shelf === "none")} />
        </div>
        <h3>Your books in : Currently Reading</h3>
        <div className="homepage-section">
            <ProductListCard bookList={getSearchBookList().filter(({shelf}) => shelf === "currentlyReading")} />
        </div>
        <h3>Your books in : Want to read</h3>
        <div className="homepage-section">
            <ProductListCard bookList={getSearchBookList().filter(({shelf}) => shelf === "wantToRead")} />
        </div>
        <h3>Your books in : Read</h3>
        <div className="homepage-section">
            <ProductListCard bookList={getSearchBookList().filter(({shelf}) => shelf === "read")} />
        </div>
    </Layout>
}

export default SearchPage;