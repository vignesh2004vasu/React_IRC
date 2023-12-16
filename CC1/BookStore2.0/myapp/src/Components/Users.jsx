import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link} from 'react-router-dom';
import '../Assets/Users.css'



function Users() {
    const [users, setUsers] = useState([]);
  
  

    useEffect(() => {
        
            loadUsers();
        
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get('http://localhost:8080/users');
            setUsers(result.data);
        } catch (error) {
            alert('Error loading users');
        }
    };

    const deleteUser = async (id) => {
      try {
          await axios.delete(`http://localhost:8080/user/${id}`);
          loadUsers();
      } catch (error) {
          console.error('Error deleting user:', error);
          alert('Error deleting user. Please try again.');
      }
  };

    return (
        
                <div>
                    <Navbar />
                    <Link to="/book">
                    <button>
                        Books
                    </button>
                    </Link>
                    <div className="container">
                        <div className="py-4">
                            <table className="table border shadow">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <Link className="btn btn-primary mx-2">View</Link>
                                                <Link className="btn btn-outline-primary mx-2"
                                                to={`/edituser/${user.id}`}
                                                >Edit</Link>
                                                <Link className="btn btn-danger mx-2"
                                                onClick={()=>deleteUser(user.id)}
                                                >Delete</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           
    );
}

export default Users;
