import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <h1 className="logout-title">Logout</h1>
      <p className="logout-message">Are you sure you want to logout?</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@material-ui/core";

// const Logout = ({ onLogout }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = React.useState(false);

//   const handleLogout = () => {
//     setOpen(true);
//   };

//   const handleConfirmLogout = () => {
//     onLogout();
//     navigate("/login");
//     setOpen(false);
//   };

//   const handleCancelLogout = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <h1>Logout</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <Dialog open={open} onClose={handleCancelLogout}>
//         <DialogTitle>Logout</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to logout?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <button onClick={handleCancelLogout}>No</button>
//           <button onClick={handleConfirmLogout}>Logout</button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Logout;
