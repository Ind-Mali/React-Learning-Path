import { useState } from "react";
import { users } from "../data/users";

const StateSample6 = () => {
  const [userList, setUserList] = useState(users);

  const [name, setName] = useState()
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [countUser, setUserCount] = useState(0)


  const addNewUser =()=>{
    const newUser = {
        name,
        username,
        email
    }
    setUserList([...userList,newUser])
  }

  const handleDelete = (id) => {
    id && setUserList(prev => {
        return prev.filter(q =>q.id !== id )
    })
  }

  const getUser = ()=>{
    setUserList(prev => prev.slice(0,countUser))
  }



  return (
    <>

    <div>
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Username:</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <button onClick={addNewUser} >Add New User</button>
        </div>
    </div>

    <div>
        {/* kısıtlayacağımız kadar veri çekmek */}
        <div>
            <label htmlFor="">Count:</label>
            <input type="text" onChange={(e)=> setUserCount(e.target.value)}/>
            <div>
                <button onClick={getUser} > Get Users </button>
            </div>
        </div>
    </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
        {userList.map((item, key) => (
          <tr key = {key}>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td><button onClick={()=>handleDelete(item.id)} >Delete</button></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default StateSample6;
