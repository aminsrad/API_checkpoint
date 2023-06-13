import axios from "axios";
import React, { useEffect, useState } from "react";
import Usercard from "./Usercard";

const UserList = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div>
      {users &&
        users.map((el) => (
          <div>
            <Usercard el={el} />
          </div>
        ))}
    </div>
  );
};

export default UserList;
