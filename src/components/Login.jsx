import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Register from "./components/Register";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        onLoginSuccess(data.token); // Pass the token to the callback
        navigate("/"); // Navigate to the home page
      } else {
        const data = await response.json();
        setErrorMessage(data.detail);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {loading && <p className="loading-message">Loading...</p>}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="forgot-password">
        <Link to="/forgot-password">Forgot password?</Link>
      </p>
      <p className="register-link">
        Don't have an account? <Link to="/register">register</Link>
      </p>
    </div>
  );
};
//     <div>
//       <h1>Login</h1>
//       {errorMessage && <p>{errorMessage}</p>}
//       {loading && <p>Loading...</p>}
//       <form onSubmit={handleLogin}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         <Link to="/forgot-password">Forgot password?</Link>
//       </p>
//       <p>
//         Don't have an account? <Link to="/register">register</Link>
//       </p>
//     </div>
//   );
// };

export default Login;
