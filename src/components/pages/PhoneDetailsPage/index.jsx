
import {useParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Button } from '../../Button';

import "./styles.css";
import PhonesOrderContext from '../../../context/phonesOrderContext';

export const PhoneDetailsPage = (props) => {
    const {id} = useParams();

    const [phone, setPhone] = useState({});

    const globalState = useContext(PhonesOrderContext);

    useEffect ( () => {
        const phone = globalState.phones.find(
            (phone) => phone.id.stringValue === id
        );
        console.log(phone);
        setPhone(phone);
    }, [])

    if (phone) {
        return (
            <div className="phones-page">
                <h1 className="phones-title"> {phone.name?.stringValue} </h1>
                <img src={phone.image?.stringValue} alt="phone photo" />
                <h1 className="phones-details" >{phone.details?.stringValue}</h1>

                <Button text="Buy Now" type="primary" isDisabled={false}/>
            </div>
        )
    } else {
        return <p>No phone with this id</p>

    }
}