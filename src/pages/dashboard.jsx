
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../layout/dashboard.css'

const Dashboard = () => {
    const [username, setusername] = useState('');
    const [filename, setfilename] = useState('');
    const [newfilename, setnewfilename] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleGetUser = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/getUser?username=${username}`,
                {
                  method: "GET",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "User details fetched successful");
                localStorage.setItem("username", username);
                navigate("/dashboard"); 
              } else {
                setMessage(data.message || "User details fetching failed");
              }
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    const handleCreateFile = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/newFile?username=${username}&filename=${filename}`,
                {
                  method: "POST",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "File creation successful");
                localStorage.setItem("filename", filename);
                navigate("/dashboard"); 
              } else {
                setMessage(data.message || "File creation failed");
              }
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    const handleDeleteFile = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/deleteFile?filename=${filename}`,
                {
                  method: "GET",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "Deletion successful");
                
                navigate("/dashboard");
              } else {
                setMessage(data.message || "Deletion failed");
              }
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    const handleRenameFile = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOST}/newFile?filename=${filename}&newfilename=${newfilename}`,
                {
                  method: "PATCH",
                }
              );
              const data = await response.json();
              if (response.ok) {
                setMessage(data.message || "Renaming successful");
                localStorage.setItem("newfilename", newfilename);
                navigate("/dashboard");
              } else {
                setMessage(data.message || "Renaming failed");
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
                    User Name:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    File Name:
                    <input
                        type="text"
                        value={filename}
                        onChange={(e) => setfilename(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    New File Name:
                    <input
                        type="text"
                        value={newfilename}
                        onChange={(e) => setnewfilename(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={handleCreateFile}>Create File</button>
                <button onClick={handleDeleteFile}>Delete File</button>
                <button onClick={handleRenameFile}>Rename File</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Dashboard;
