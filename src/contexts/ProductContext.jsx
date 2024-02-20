import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [dataProduct, setDataProduct] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDataProduct(data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  };

  const categoryAndRatingArr = Object.entries(
    dataProduct.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item.rating);
      return acc;
    }, {})
  );

  const categoryName = categoryAndRatingArr.map((item) => item[0]);

  const ratingNumber = categoryAndRatingArr.map((number) => number[1]);
  console.log("ratingNumber ==> ", ratingNumber);

  const calAvg = (numData) => {
    const sum = numData.reduce((acc, el) => acc + el, 0);
    return sum / numData.length;
  };

  const averageRatingArray = ratingNumber.map((numData) => {
    const average = calAvg(numData);
    return +average.toFixed(2);
  });
  console.log("averageRatingArray ==> ", averageRatingArray);

  return (
    <ProductContext.Provider
      value={{ dataProduct, categoryName, averageRatingArray, initialLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
}
