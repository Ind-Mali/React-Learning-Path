import { categories } from "../data/categories";

const JsxMapSapmle3 = () => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Desription</th>
        </tr>
        {categories.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default JsxMapSapmle3;
