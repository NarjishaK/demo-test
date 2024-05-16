import React, { useState, useEffect } from "react";
import "./user.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:7001/user/edituser/${id}`);
        const user = response.data;
        setUsername(user.username);
        setEmail(user.email);
        setPhone(user.phone);
        setPassword(user.password);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const requestData = { username, phone, email, password };
    try {
      const response = await axios.put(`http://localhost:7001/user/updateuser/${id}`, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("User updated");
      navigate("/userlist");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div className="update-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Update User</title>
      <div className="wrapper">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="input-field">
            <input
              type="text"
              value={username}
              placeholder="Enter your Name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Number"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update</button>
          <div className="register">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
