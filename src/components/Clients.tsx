import { useState, useEffect } from "react";

interface User {
  _id: number;
  name: string;
  lastname: string;
  password: string;
  mobile_email: string;
  dob: string;
  genre: boolean;
}

const Clients = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.log("Error fetching from this end point", err));
  }, []);

  return (
    <>
      <h1>User list: </h1>

      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Clients;
