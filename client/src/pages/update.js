import React, { useState } from 'react';
import "./user.css"
import axios from 'axios';

function Update() {
  // const users = [
  //   { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  //   { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  //   { name: 'Bob Johnson', phone: '555-123-4567', email: 'bob@example.com' },
  // ];
  const [users,setUsers]=useState([])

  const handleUpdate = async() => {
    try{
     const response = await axios.get("http://localhost:7001/user/user")
     
    }catch(err){
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
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button className="update-button" onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Update;
