import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

const URL = 'https://fakestoreapi.com/products';

const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});
    const [subtotal, setSubtotal] = useState(0);

    const getItem = (id) => {
        const product = data?.find((item) => item.id === id);
        return product;
    }

    const addToCart = (id) => {
        const tempProduct = [...data];
        // const index = tempProduct.indexOf(getItem(id));
        // const product = tempProduct[index];
        const product = getItem(id);
        product.inCart = true;
        product.count = 1;
        setCart([...cart, product]);
        

        
    }
    
    const setProducts = async() => {
        const response = await fetch(URL);
        const getData = await response.json();
        const modifiedData = getData.map((item) => {
            return { ...item, inCart: false, count: 0, total: item.price }
        });
        setData(modifiedData)
        setDetailProduct(modifiedData[0])
    }

    const detailHandler = (id) => {
        const product = getItem(id);
        setDetailProduct(product);
        // navigate('/details')

    }
    const addTotal = () => {
        const tempProduct = [...cart];
        // console.log(fro)
        let subtotal = 0;
        console.log('tempProduct', tempProduct)
        tempProduct.forEach((item) => {
            console.log(item)
            subtotal = subtotal + item.total;
        })
        console.log('from add total', cart,subtotal)
        
        return subtotal;
    }

    const addProduct = (id) => {
        // const tempCartItem = [...cart];
        const tempCartItem = cart;
        console.log('x', tempCartItem);

        const selectedItem = tempCartItem.find((item) => item.id === id);
        selectedItem.count += 1;
        selectedItem.total = selectedItem.count * selectedItem.price;
        setCart(tempCartItem);
}

    useEffect(() => {
        // fetch(URL).then((response) => response.json()).then((realData) => setData(realData)); 
        setProducts();
    }, [])
    useEffect(() => {
        setSubtotal(addTotal());
    }, [cart])
 
    return (
        <AppContext.Provider value={{data, cart,getItem,addToCart,detailHandler,detailProduct, addProduct, subtotal}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

export const useProviderValue = ()=> useContext(AppContext);