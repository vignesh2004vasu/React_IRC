import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [adminId, setAdminId] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const authenticateAdmin = () => {
        if (adminId === 'admin' && adminPassword === 'admin') {
            setAuthenticated(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    useEffect(() => {
        if (authenticated) {
            loadUsers();
        }
    }, [authenticated]);

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
            {!authenticated ? (
                <div className="admin-authentication">
                    {/* Admin login UI */}
                </div>
            ) : (
                <div>
                    <Navbar />
                    <div className="container">
                        <div className="py-4">
                            <table className="table border shadow">
                                {/* Table contents */}
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;
