import React, { useEffect, useState } from "react";
import "./home.css"; // ✅ External CSS import

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  email: string;
  phone: string;
  gender: string;
  username: string;
  password: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  address: {
    address: string;
    city: string;
    state: string;
  };
};

type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

function Home() {
  const [data, setData] = useState<UsersResponse | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="user-grid">
        {data &&
          data.users.map((user) => (
            <div
              key={user.id}
              className="user-card"
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.image}
                alt={user.firstName}
                className="user-image"
              />
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="user-address">
                <strong>Address:</strong> {user.address?.address},{" "}
                {user.address?.city}, {user.address?.state}
              </p>
            </div>
          ))}
        {!data && <p>Loading...</p>}
      </div>

      {selectedUser && (
        <div className="overlay" onClick={() => setSelectedUser(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              &times;
            </button>
            <img
              src={selectedUser.image}
              alt={selectedUser.firstName}
              className="popup-image"
            />
            <h2>
              {selectedUser.firstName} {selectedUser.lastName}
            </h2>
            <p>
              <strong>Gender:</strong> {selectedUser.gender}
            </p>
            <p>
              <strong>Username:</strong> {selectedUser.username}
            </p>
            <p>
              <strong>Password:</strong> {selectedUser.password}
            </p>
            <p>
              <strong>Birth Date:</strong> {selectedUser.birthDate}
            </p>
            <p>
              <strong>Blood Group:</strong> {selectedUser.bloodGroup}
            </p>
            <p>
              <strong>Height:</strong> {selectedUser.height} cm
            </p>
            <p>
              <strong>Weight:</strong> {selectedUser.weight} kg
            </p>
            <p>
              <strong>Eye Color:</strong> {selectedUser.eyeColor}
            </p>
            <p>
              <strong>Age:</strong> {selectedUser.age}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser.address?.address},{" "}
              {selectedUser.address?.city}, {selectedUser.address?.state}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
