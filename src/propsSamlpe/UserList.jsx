import UserListRow from "./UserListRow";

const UserList = ({ userlist }) => {
  return (
    <>
      {userlist.map((user, key) => {
        return <UserListRow key = {key} user={user} />;
      })}
    </>
  );
};

export default UserList;
