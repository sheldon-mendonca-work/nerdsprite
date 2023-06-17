import ProductCard from '../ProductCard/ProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { bookList } = props;
    return <section className="productlist-section">
        {
            bookList.length > 0 ? bookList.map(book => <ProductCard key={book._id} book={book} />) : <h3>No books in this section.....</h3>
        }
    </section>
}