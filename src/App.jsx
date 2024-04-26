// import React from "react";
// import Home from "./components/Home";
// import { Routes, Route } from "react-router-dom";
// import Quotes from "./components/Quotes";
// import BookDetails from "./components/BookDetails";
// import NotFound from "./components/NotFound";
// import Reader from "./components/Reader";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/quotes" element={<Quotes />} />
//         <Route path="/books/:id" element={<BookDetails />} />
//         <Route path="/reader" element={<Reader />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Home from "./components/Home";
// import { Routes, Route } from "react-router-dom";
// import Quotes from "./components/Quotes";
// import BookDetails from "./components/BookDetails";
// import NotFound from "./components/NotFound";
// import Reader from "./components/Reader";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/quotes" element={<Quotes />} />
//         <Route path="/books/:id" element={<BookDetails />} />
//         <Route path="/reader" element={<Reader />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Home from "./components/Home";
// import Quotes from "./components/Quotes";
// import BookDetails from "./components/BookDetails";
// import NotFound from "./components/NotFound";
// import Reader from "./components/Reader";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
// // import Register from "./components/Register";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Check if user is logged in on page load
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setIsLoggedIn(true);
//       setToken(storedToken);
//     }
//   }, []);

//   const handleLoginSuccess = (token) => {
//     setIsLoggedIn(true);
//     setToken(token);
//     localStorage.setItem("token", token);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/quotes" element={<Quotes />} />
//         <Route path="/books/:id" element={<BookDetails />} />
//         <Route path="/reader" element={<Reader />} />
//         <Route
//           path="/login"
//           element={<Login onLoginSuccess={handleLoginSuccess} />}
//         />
//         {isLoggedIn ? (
//           <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//         ) : (
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// -----------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import Reader from "./components/Reader";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register"; // Import the Register component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if user is logged in on page load
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/reader" element={<Reader />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/register" element={<Register />} />{" "}
        {/* Add a route for the Register component */}
        {isLoggedIn ? (
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
