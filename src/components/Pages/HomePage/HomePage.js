//shelves: currentlyReading, wantToRead, read

import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";

const HomePage = () => {
    const { bookList} = useContext(ProductContext);
    const navigate = useNavigate();

    return <Layout>
        <div>
            <h2 onClick={()=>navigate('/search')} className="homepage-search heading2">Go to Search</h2>
        </div>
        <h3>Currently Reading</h3>
        <div className="homepage-section">
            <ProductListCard bookList={bookList.filter(({shelf}) => shelf === "currentlyReading")} />
        </div>
        <h3>Want to read</h3>
        <div className="homepage-section">
            <ProductListCard bookList={bookList.filter(({shelf}) => shelf === "wantToRead")} />
        </div>
        <h3>Read</h3>
        <div className="homepage-section">
            <ProductListCard bookList={bookList.filter(({shelf}) => shelf === "read")} />
        </div>
    </Layout>
}

export default HomePage;