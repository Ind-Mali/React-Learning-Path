// import section
import { products } from "../data/products";
import { useState } from "react";

const StateSample7 = () => {
  // useState Sections
  const [productList, setProductList] = useState(products);
  const [searchName, setSearchName] = useState("");

// arrow fonction section
  const searchProducts = () => {
    setProductList(prev => {
        return prev.filter(q => q.name.startsWith(searchName))
    })
  }

  // return section
  return (
    <>
      <div>
        <label htmlFor="">Search:</label>
        <input type="text" onChange={(e) => setSearchName(e.target.value)} />
        <button onClick={searchProducts}>Search</button>
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
