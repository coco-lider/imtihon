import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const {id} = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(res.data);
      } catch (error) {
        console.error("malumot olishda xatolik bor", error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <div>
        <h1>User Manager</h1>
        <button>Login</button>
      </div>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li onClick={()=>navigate(`/users/${user.id}`)} key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUsers;
