import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("data ==> ", data.products);

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
}
