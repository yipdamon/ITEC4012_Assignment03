import React, {useState} from 'react';

const PhonesOrderContext = React.createContext({
    phones: [],
    order: [],
    initializePhones: () => {},
    addPhoneToOrder: () => {},
    removePhoneFromOrder: () => {},
});

export const PhonesOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [phones, setPhones] = useState([]);

    const initializePhones = (phonesFromApi) => {
        setPhones(phonesFromApi);
    }

    const addPhoneToOrder = (phone) => {
        let newOrder = order; 
        newOrder.push (phone);
        setOrder(order);
    }

    const removePhoneFromOrder = (phoneId) => {
        let prevOrder = order;
        const found = order.findIndex( (phone ) => {
            return (phone.id === phoneId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<PhonesOrderContext.Provider
     value={{order: order, addPhoneToOrder: addPhoneToOrder, removePhoneFromOrder: removePhoneFromOrder, phones: phones, initializePhones: initializePhones }}
    >
        {props.children}
    </PhonesOrderContext.Provider>)

} 

export default PhonesOrderContext;