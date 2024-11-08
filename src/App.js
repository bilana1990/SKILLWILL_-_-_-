// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import SettingsPage from './pages/SettingsPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
                    <Route path="/account" element={<ProtectedRoute component={AccountPage} />} />
                    <Route path="/settings" element={<ProtectedRoute component={SettingsPage} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;