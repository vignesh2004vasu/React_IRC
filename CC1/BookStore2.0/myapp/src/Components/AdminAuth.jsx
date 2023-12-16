import React from 'react'

export default function AdminAuth() {

    const authenticateAdmin = () => {
        
        if (adminId === 'admin' && adminPassword === 'admin') {
            setAuthenticated(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

  return (
    <>
    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Admin ID"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    <button onClick={authenticateAdmin}>Login</button>
                
        </>
  )
}
