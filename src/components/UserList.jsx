import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // очистка ресурсов при размонтировании компонента
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Count {count}</h1>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
