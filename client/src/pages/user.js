import React, { useState } from 'react';
import "./user.css";
import axios from "axios";

function Update() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      phone,
      email,
      password
    };
    try {
      const response = await axios.post(
        "http://localhost:7001/user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("User created");
      window.location.href = '/userlist';
    } catch (err) {
      console.log("An error occurred");
      alert("Failed Registration.");
    }
  };

  return (
    <div className="update-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Glassmorphism Login Form | CodingNepal</title>
      <link rel="stylesheet" href="style.css" />
      <div className="wrapper">
        <form onSubmit={handleCreate}>
          <h2>Login</h2>
          <div className="input-field">
            <input
              type="text"
              value={username}
              placeholder='Enter your Name'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Number'
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={password}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
