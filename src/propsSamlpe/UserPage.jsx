import {users} from "../data/users"
import UserList from "./UserList"

const UserPage = () => {
  return (
    <div>
      <UserList userlist= {users}/>
    </div>
  )
}

export default UserPage