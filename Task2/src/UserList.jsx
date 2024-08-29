import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchUser();
  }, []);

 return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
};

export default UserList;
