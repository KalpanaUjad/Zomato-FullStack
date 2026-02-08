import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/"); // Redirect to home after login

  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header>
          <h1 id="user-login-title" className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue your food journey.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New here? <a href="/user/register">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../../styles/auth-shared.css";

// const UserLogin = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!formData.email || !formData.password) {
//       setError("Email and password are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/auth/user/login`,
//         formData,
//         { withCredentials: true }
//       );

//       if (response.data.success) {
//         navigate("/");
//       } else {
//         setError("Invalid credentials");
//       }

//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page-wrapper">
//       <div className="auth-card" role="region" aria-labelledby="user-login-title">
//         <header>
//           <h1 id="user-login-title" className="auth-title">Welcome back</h1>
//           <p className="auth-subtitle">Sign in to continue your food journey.</p>
//         </header>

//         <form className="auth-form" onSubmit={handleSubmit} noValidate>
//           {error && <p className="auth-error" role="alert">{error}</p>}

//           <div className="field-group">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               autoComplete="email"
//               required
//             />
//           </div>

//           <div className="field-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               autoComplete="current-password"
//               required
//             />
//           </div>

//           <button className="auth-submit" type="submit" disabled={loading}>
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         <div className="auth-alt-action">
//           New here? <Link to="/user/register">Create account</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;
