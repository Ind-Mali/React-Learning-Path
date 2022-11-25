
import { products } from "../data/products";
import { useState } from "react";

const StateSample7 = () => {

  const [productList, setProductList] = useState(products);
  const [searchName, setSearchName] = useState("");
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  const searchProducts = () => {
    const _searchName = searchName.toLowerCase().trim();
    const filteredData = products.filter((q) =>
      q.name.toLowerCase().trim().startsWith(_searchName)
    );
    setProductList([...filteredData]);
  };

  const getProduct = () =>{
    console.log("min price",price.minPrice);
    console.log("max price",price.maxPrice);
    
  }


  return (
    <>
      <div>
        <label htmlFor="">Search: </label>
        <input type="text" onChange={(e) => setSearchName(e.target.value)} />
        <button onClick={searchProducts}>Search</button>
      </div>

      <div>
        <label htmlFor="">Min Price</label>
        <input
          type="text"
          onChange={(e) =>
            setPrice((prev) => {
              return { ...prev, minPrice: e.target.value };
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">Max Price</label>
        <input
          type="text"
          onChange={(e) =>
            setPrice((prev) => {
              return { ...prev, maxPrice: e.target.value };
            })
          }
        />
      </div>
      <div>
        <button onClick={getProduct}>get</button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
        </tr>
        {products.map((item, key) => (
          <tr key={key}>
            <td>{item.name}</td>
            <td>{item.unitsInStock}</td>
            <td>{item.unitPrice}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default StateSample7;
