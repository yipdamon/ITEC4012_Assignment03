import "./styles.css";
import { useEffect, useState, useContext} from "react";
import { PhoneItem } from "../../PhoneItem";
import PhonesOrderContext from "../../../context/phonesOrderContext";
import { Search } from "../../Search";
// import { useHistory } from "react-router";

export const PhonesHomePage = () => {

  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchString, setSearchString] = useState('');

  const globalState = useContext(PhonesOrderContext);

  // const history = useHistory();

  useEffect(
    () => {
      getPhones();
    }, []
  );

  useEffect (
    () => {
      handleSearchByBrand();
    }, [searchString]
  )

  // if search string was empty, don't filter and show all phones
  const handleSearchByBrand = () => {
    if(searchString === ''){
      setFilteredPhones(phones);
      return;
    }

    // filter
    const phonesFiltered = phones.filter(
      (phone) => {
        const brand = phone.brand.stringValue.toLowerCase();
        const isMatch = brand.indexOf(searchString.trim().toLowerCase());

        return isMatch !== -1;
      } 
    )
    setFilteredPhones(phonesFiltered);

  }

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
    setFilteredPhones(formattedData)
    globalState.initializePhones(formattedData);
    setLoading(false);

  } catch(err){
    console.log (err)
    setLoading(false);
  }
}

  const handleSearchUpdate = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div className="phones-page">
      <h1 className="phones-title"> All Phones </h1>
      <Search handleSearchUpdate={handleSearchUpdate} />
      <div className="phones-container">
      {
        filteredPhones.map((phone) => (
          <PhoneItem key={phone.id.stringValue} name={phone.name.stringValue} image={phone.image.stringValue} color={phone.color.stringValue} brand={phone.brand.stringValue} os={phone.os.stringValue} price={phone.price.stringValue} year={phone.year.stringValue} id={phone.id.stringValue} ></PhoneItem>
        ))
      }
      
      {
        !loading && filteredPhones.length === 0 && <p>Nothing Found for {searchString}!</p>
      }

      {
        loading && <p>Loading Data..</p>
      }
      </div>
    </div>
  );
};
