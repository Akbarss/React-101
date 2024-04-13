import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responeApi = await axios.get("https://reqres.in/api/users?page=2");
        setUser(responeApi.data.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default UserList;
