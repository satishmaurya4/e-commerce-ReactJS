import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const URL = "https://fakestoreapi.com/products";

const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [showProduct, setShowProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState({});
  const [category, setCategory] = useState("all products");
  const [sortByPrice, setSortByPrice] = useState(null);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [clearFilter, setClearFilter] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    contactNo: "",
    password: "",
    cofirmPassword: "",
  });
  const [getFormValues, setGetFormValues] = useState({});

  const formData = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-10 letters and it should not contain any special character!",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Please write valid email!",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "contactNo",
      type: "text",
      errorMessage: "Please wirte 10 digits contact number!",
      label: "contact number",
      pattern: "^[7-9][0-9]{9}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMessage:
        "Password should contains aA1& and between 8-16 characters!",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}`,
      required: true,
    },
    {
      id: 5,
      name: "cofirmPassword",
      type: "password",
      errorMessage: "Password should be matched!",
      label: "confirm Password",
      pattern: formValues.password,
      required: true,
    },
  ];

  const getItem = (id) => {
    const product = data?.find((item) => item.id === id);
    return product;
  };
  const addToCart = (id) => {
    const product = getItem(id);
    product.count += 1;
    product.total = product.count * product.price;
    setTotalCartItem([product, ...totalCartItem]);
  };

  const setCart = () => {
    const tempTotalCartItem = [...totalCartItem];
    const uniqueCartItem = [...new Set(tempTotalCartItem)];
    setCartItem(uniqueCartItem);
  };

  const setProducts = async () => {
    const response = await fetch(URL);
    const getData = await response.json();

    const modifiedData = getData.map((item) => {
      return { ...item, count: 0, total: item.price };
    });
    setData(modifiedData);
    setShowProduct(modifiedData);
    setDetailProduct(modifiedData[0]);
    setLoading(true);
  };

  const detailHandler = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };
  const addTotal = () => {
    const tempProduct = [...cartItem];
    let subtotal = 0;
    let tax = 0;
    tempProduct.forEach((item) => {
      subtotal = parseFloat((subtotal + item.total).toFixed(2));
    });
    tax = parseFloat((subtotal * 0.1).toFixed(2));
    return {
      subtotal,
      tax,
      cartTotal: parseFloat((subtotal + tax).toFixed(2)),
    };
  };

  const plusProduct = (id) => {
    const tempCartItem = [...cartItem];
    const selectedItem = tempCartItem.find((item) => item.id === id);
    selectedItem.count += 1;
    selectedItem.total = parseFloat(
      (selectedItem.count * selectedItem.price).toFixed(2)
    );
    setTotalCartItem(tempCartItem);
  };
  const minusProduct = (id) => {
    const tempCartItem = [...cartItem];
    const selectedItem = tempCartItem.find((item) => item.id === id);

    selectedItem.count -= 1;
    selectedItem.total = parseFloat(
      (selectedItem.count * selectedItem.price).toFixed(2)
    );
    setTotalCartItem(tempCartItem);

    if (selectedItem.count === 0) {
      deleteProduct(id);
    }
  };

  const deleteProduct = (id) => {
    const tempCartItem = [...cartItem];
    const filteredProduct = tempCartItem.filter((item) => item.id !== id);
    const removedCartItem = tempCartItem.find((item) => item.id === id);
    removedCartItem.count = 0;
    removedCartItem.total = removedCartItem.price;

    setTotalCartItem(filteredProduct);
  };

  const clearCart = () => {
    const tempCartItem = [...cartItem];
    tempCartItem.forEach((item) => {
      item.count = 0;
      item.total = item.price;
    });
    setTotalCartItem([]);
  };

  const calculateCartCount = () => {
    let tempCartItem = [...cartItem];
    let totalCartCount = 0;
    tempCartItem.forEach((item) => {
      totalCartCount += item.count;
    });
    setCartCount(totalCartCount);
  };

  const transformedProducts = () => {
    if (data) {
      let allProducts = [...data];
      if (category === "all products") {
        allProducts = allProducts;
        setClearFilter(false);
      }
      if (category === "men's clothing") {
        allProducts = allProducts.filter(
          (product) => product.category === category
        );
        setClearFilter(false);
      }
      if (category === "jewelery") {
        allProducts = allProducts.filter(
          (product) => product.category === category
        );
        setClearFilter(false);
      }
      if (category === "electronics") {
        allProducts = allProducts.filter(
          (product) => product.category === category
        );
        setClearFilter(false);
      }
      if (category === "women's clothing") {
        allProducts = allProducts.filter(
          (product) => product.category === category
        );
        setClearFilter(false);
      }
      if (sortByPrice === "ascending") {
        allProducts.sort((a, b) => {
          return a.price - b.price;
        });
        setClearFilter(false);
      }
      if (sortByPrice === "descending") {
        allProducts.sort((a, b) => {
          return b.price - a.price;
        });
        setClearFilter(false);
      }
      if (input) {
        allProducts = allProducts.filter((product) =>
          product.title
            .toLowerCase()
            .trim()
            .includes(input.toLowerCase().trim())
        );

        setClearFilter(false);
      }
      if (rating) {
        allProducts = allProducts.filter((item) => {
          return item.rating.rate >= rating;
        });
        setClearFilter(false);
      }
      if (clearFilter) {
        setInput("");
        setCategory("all products");
        setSortByPrice("");
        setRating(0);
      }

      return allProducts;
    } else {
      console.log("error occured");
    }
  };

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    setShowProduct(transformedProducts());
  }, [category, sortByPrice, input, rating, clearFilter]);

  useEffect(() => {
    setCart();
    calculateCartCount();
  }, [totalCartItem]);

  useEffect(() => {
    setTotalAmount(addTotal());
    calculateCartCount();
  }, [cartItem]);
  return (
    <AppContext.Provider
      value={{
        data,
        showProduct,
        setShowProduct,
        cartItem,
        cartCount,
        getItem,
        addToCart,
        detailHandler,
        detailProduct,
        plusProduct,
        minusProduct,
        deleteProduct,
        totalAmount,
        clearCart,
        loading,
        category,
        setCategory,
        sortByPrice,
        setSortByPrice,
        input,
        setInput,
        rating,
        setRating,
        setClearFilter,
        formData,
        formValues,
        setFormValues,
        showProfile,
        setShowProfile,
        showProfileContent,
        setShowProfileContent,
        getFormValues,
        setGetFormValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useProviderValue = () => useContext(AppContext);
