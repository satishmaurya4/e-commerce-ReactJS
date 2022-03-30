import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const URL = 'https://fakestoreapi.com/products';

const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [cartItem, setCartItem] = useState([]);
    const [totalCartItem, setTotalCartItem] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [totalAmount, setTotalAmount] = useState({});

    const getItem = (id) => {
        const product = data?.find((item) => item.id === id);
        return product;
    }

    const addToCart = (id) => {
        // const tempProduct = [...data];
        // const index = tempProduct.indexOf(getItem(id));
        // const product = tempProduct[index];
        const product = getItem(id);
        product.count += 1;
        product.total = product.count * product.price;
        setTotalCartItem([product, ...totalCartItem]);

       
    }
    
    const setCart = () => {
        const tempTotalCartItem = [...totalCartItem];
        const uniqueCartItem = [...new Set(tempTotalCartItem)]
        setCartItem(uniqueCartItem);
    
}

    const setProducts = async() => {
        const response = await fetch(URL);
        const getData = await response.json();
        const modifiedData = getData.map((item) => {
            return { ...item, count: 0, total: item.price }
        });
        setData(modifiedData)
        setDetailProduct(modifiedData[0]);
        setLoading(true);
    }

    const detailHandler = (id) => {
        const product = getItem(id);
        setDetailProduct(product);
    }
    const addTotal = () => {
        const tempProduct = [...cartItem];
        let subtotal = 0;
        let tax = 0;
        tempProduct.forEach((item) => {
            subtotal = parseFloat((subtotal + item.total).toFixed(2));
        })
        tax = parseFloat((subtotal * 0.1).toFixed(2));
        return {
            subtotal,
            tax,
            cartTotal: parseFloat((subtotal + tax).toFixed(2)),
        };
    }

    const plusProduct = (id) => {
        const tempCartItem = [...cartItem];
        // const tempCartItem = cartItem; //getting the original reference with old values
        // console.log('temp cart item', tempCartItem);
        // console.log('cart item', cartItem);

        const selectedItem = tempCartItem.find((item) => item.id === id);
        selectedItem.count += 1;
        selectedItem.total = parseFloat((selectedItem.count * selectedItem.price).toFixed(2));
        setCartItem(tempCartItem);
}
    const minusProduct = (id) => {
        const tempCartItem = [...cartItem];
        const selectedItem = tempCartItem.find((item) => item.id === id);
     
            selectedItem.count -= 1;
            selectedItem.total = parseFloat((selectedItem.count * selectedItem.price).toFixed(2));
        setCartItem(tempCartItem);

if (selectedItem.count  === 0) {
    deleteProduct(id);
} 
    }
    
    const deleteProduct = (id) => {
        const tempCartItem = [...cartItem];
        const filteredProduct = tempCartItem.filter((item) => item.id !== id);
        const removedCartItem = tempCartItem.find((item) => item.id === id);
        removedCartItem.inCart = false;
        removedCartItem.total = removedCartItem.price;

        setCartItem(filteredProduct)
    }

    const clearCart = () => {
        const tempCartItem = [...cartItem];
        tempCartItem.forEach((item) => {
            item.total = item.price;
        })
        setCartItem([]);
}

    
    const calculateCartCount = () => {
        let tempCartItem = [...cartItem];
        let totalCartCount = 0;
        tempCartItem.forEach((item) => {
            totalCartCount += item.count;
        })
        setCartCount(totalCartCount);
    }

    useEffect(() => {
        // fetch(URL).then((response) => response.json()).then((realData) => setData(realData)); 
        setProducts();
    }, [])
    // useEffect(() => {
    //     setCartAmount(addTotal());
    //     calculateCartCount();
    // }, [cart])
    useEffect(() => {
        setCart();
        calculateCartCount();
    }, [totalCartItem])
    useEffect(() => { 
        setTotalAmount(addTotal());
        calculateCartCount();
    }, [cartItem])
    return (
        <AppContext.Provider value={{data, cartItem,cartCount,getItem,addToCart,detailHandler,detailProduct, plusProduct, minusProduct,deleteProduct,totalAmount,clearCart,loading}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

export const useProviderValue = ()=> useContext(AppContext);