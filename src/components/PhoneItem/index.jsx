import './styles.css';
import { Link } from 'react-router-dom';
import PhonesOrderContext from '../../context/phonesOrderContext';
import { useContext } from 'react';

export const PhoneItem = (props) => {

    const {name, image, os, year, color, brand, price, id, details} = props;

    const globalState = useContext(PhonesOrderContext);

    return (
        <div className="phone">
            <img className="phone-photo" src={image} alt={name + brand + "photo"} />

            <Link to={`/phone/${id}`}>
            <h1 className="phone-name"> { name } </h1>
            </Link>

            <p className="phone-color"> {color} </p>
            <p className="phone-os"> {os} </p>
            <p className="phone-price"> {price} </p>
            <p className="phone-brand"> {brand} </p>
            <p className="phone-year"> {year} </p>
            <p hidden> {details} </p>
        
        </div>
    )
}