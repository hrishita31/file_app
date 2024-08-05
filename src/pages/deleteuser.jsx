
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../layout/delete.css';

const Delete = () => {
    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

   
    const handleDeleteUser = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/deleteUser?username=${username}`,
                {
                  method: "POST",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "Deletion successful");
                navigate("/login");
              } else {
                setMessage(data.message || "Deletion failed");
              }
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    return (
        <div>
            <h2>File Management App</h2>
            <div>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={handleDeleteUser}>Delete User</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Delete;
