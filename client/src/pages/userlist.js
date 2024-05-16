import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Update() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:7001/user/update");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Update Count</th> {/* Change this header */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button className="update-button">
                  <Link
                    to={`/edit/${user._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Update
                  </Link>
                </button>
              </td>
              <td>{user.updateCount || 0}</td> {/* Display update count */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Update;
