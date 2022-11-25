import { suppliers } from "../dataSupliers/suppliers";

const JsxMapSampleSuppliers = () => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Company Name</th>
        <th>Country</th>
      </tr>
      {suppliers.map((item) =>
          (<tr key ={item.id}style={{backgroundColor: item.address?.country?.toLowerCase() === "japan" ? "red": ""}}>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.address?.country}</td>
          </tr>)
        )
      }
    </table>
  );
};

export default JsxMapSampleSuppliers;
