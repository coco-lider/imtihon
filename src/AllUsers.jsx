import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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

  let inputValue = useRef(null)
  let login = useRef(null)
  let p = useRef(null)

  function handleLogin() {
    login.current.style.display = 'flex'
    p.current.style.display = 'none'

  }

  function handleClose() {
    login.current.style.display = 'none'

  }

  function handleWelcome() {
    setName(inputValue.current.value)
    login.current.style.display = 'none'
    p.current.style.display = 'block'
  }

  return (
    <div>
      <div>
        <h1>User Manager</h1>
        <div className="border-b p-5">
          <button onClick={handleLogin} className="  mb-5 border p-2 rounded">Login</button>
          <div ref={login} className="flex-col gap-5 none hidden">
            <button onClick={handleClose} className="p-2 border rounded w-20">close</button>
            <input ref={inputValue} className="border p-2 rounded w-50" type="text" placeholder="name" />
            <button onClick={handleWelcome} className="p-2 border rounded w-20">Submit</button>
          </div>
          <p ref={p} className="text-2xl hidden ">Welcome  website <b>{name}</b></p>
        </div >
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
