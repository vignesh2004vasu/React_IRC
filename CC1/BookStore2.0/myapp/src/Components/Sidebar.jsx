// Sidebar.js
import '../Assets/Sidbar.css'
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      
      <button onClick={() => navigate("/addbook")} className="btn btn-primary mb-3">
        Add Book
      </button>
      <button onClick={() => navigate("/user")} className="btn btn-primary mb-3">
        Users
      </button>
      <button onClick={() => navigate("/book")} className="btn btn-primary mb-3">
        Books
      </button>
     
    </div>
  );
};

export default Sidebar;
