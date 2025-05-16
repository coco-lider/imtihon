import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          { signal: controller.signal }
        );
        setUser(res.data);
      } catch (error) {
        console.error("Ma'lumot olishda xatolik bor", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading || !user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
      </ul>
    </div>
  );
};

export default User;
