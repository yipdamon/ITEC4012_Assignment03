import "./styles.css";
import { useEffect, useState, useContext } from 'react';
import { PhoneItem } from '../../PhoneItem';
import PhonesOrderContext from "../../../context/phonesOrderContext";

export const HomePage = () => {

    const [phones, setPhones] = useState([]);

    const globalState = useContext(PhonesOrderContext);

    useEffect(
        () => {
          getPhones();
        }, []
      );

    const getPhones = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/assign03-phones/databases/(default)/documents/phones/');
            const data = await response.json();
            //console.log(data);
            const formattedData = data.documents.map( (item) => {
              return item.fields
            });
        
            //console.log (formattedData);
            setPhones(formattedData);
            globalState.initializePhones=(formattedData);
        
        } catch(err){
            console.log (err)
        }
    }  
    

    return (
        <div className="phones-page">
          <h1 className="phones-title"> All Phones </h1>
          <div className="phones-container">
            {
                phones.map((phone) => (
                // <PhoneItem key={phone.id.stringValue} name={phone.name.stringValue} image={phone.image.stringValue} color={phone.color.stringValue} brand={phone.brand.stringValue} os={phone.os.stringValue} price={phone.price.stringValue} year={phone.year.stringValue} id={phone.id.stringValue} ></PhoneItem>

                <PhoneItem name={phone.name.stringValue} image={phone.image.stringValue} color={phone.color.stringValue} brand={phone.brand.stringValue} os={phone.os.stringValue} price={phone.price.stringValue} year={phone.year.stringValue} ></PhoneItem>
                ))
            }
          </div>
        </div>
      );
}