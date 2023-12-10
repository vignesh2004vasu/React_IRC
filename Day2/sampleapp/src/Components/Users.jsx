import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

function Users() {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }   
  return (
    <div>

        <Navbar/>
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                    <button className="btn btn-primary mx-2">view</button>
                    <button className="btn btn-outline-primary mx-2">edit</button>
                    <button className="btn btn-danger mx-2">Delete</button>
                </td>
                </tr>

        ))
    }
    
  </tbody>
</table>

        </div>
    </div>
    </div>
  )
}

export default Users;