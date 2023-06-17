import { useContext } from 'react';
import './ProductCard.css'
import { ProductContext } from '../../../contexts/ProductContext';

export default function ProductCard(props){
    const { book } = props;
    const {_id, title, imgLink, author, categoryName, shelf } = book;

    const { updateByShelf } = useContext(ProductContext);

    return <div className="productcard-card">
        <div className="productcard-img">
            <img src={imgLink} alt={title} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <h4 className="productcard-card-title">{title}</h4>
            <p className="productcard-card-author">{author}</p>
            <p className="productcard-card-category">{categoryName}</p>
            <select defaultValue={shelf} onChange={(event)=>updateByShelf(_id, event.target.value)}>
                <option disabled>Move To</option>
                <option value={"currentlyReading"}>Currently Reading</option>
                <option value={"wantToRead"}>Want To Read</option>
                <option value={"read"}>Read</option>
                <option value={"none"}>None</option>
                </select>
        </div>
    </div>
}