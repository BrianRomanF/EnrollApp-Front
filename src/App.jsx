// Import necessary dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Home component
const Home = () => {
    // Function to handle Google login
    const handleLogin = async () => {
        try {
            const response = await axios.get('https://enroll-backend.onrender.com/auth/google', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <h1>MERN App with Google Auth</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

// GoogleCallback component
const GoogleCallback = () => {
    // Use useEffect to handle Google callback logic
    useEffect(() => {
        const handleGoogleCallback = async () => {
            try {
                // Perform any additional logic after successful Google authentication
                console.log('Successfully authenticated with Google');
            } catch (error) {
                console.error('Error during Google callback:', error);
            }
        };

        // Call the function when the component mounts
        handleGoogleCallback();
    }, []);

    // Return a message or redirect as needed
    return <Navigate to="/" />;
};

// Main App component
const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* Add other navigation links as needed */}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/google/callback" element={<GoogleCallback />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
