
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../layout/login.css';

const Login = () => {
    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCreateUser = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/newUser?firstname=${firstname}&username=${username}`,
                {
                  method: "POST",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "Login successful");
                localStorage.setItem("username", username);
                navigate("/dashboard"); // Redirect to main page
              } else {
                setMessage(data.message || "Login failed");
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
                <button onClick={handleCreateUser}>Create User</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
