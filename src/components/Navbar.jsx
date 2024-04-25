import React, { useState } from "react"; // Add useState to the import statement
import Input from "./Input";
import UseFetch from "./UseFetch";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const [term, setTerm] = useState("Anything");
  //   const {
  //     data: books,
  //     isLoading,
  //     error,
  //   } = UseFetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyBzudRAHdI8ern7yVIp1qwrjpTBm0sQrSg`
  //   );

  return (
    <div>
      <div className="bg-white">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="lg:text-3xl">BOOKS</h1>
          {/* <Input searchBooks={(search) => setTerm(search)} /> */}
          <nav>
            <ul className="flex ml-5">
              <li>
                <Link to="/" className="mr-5 focus:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quotes" className="mr-6 focus:text-black">
                  Quotes
                </Link>
              </li>
              <li>
                <Link to="/reader" className="focus:text-black">
                  Read
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// import React, { useState } from "react";
// import Input from "./Input";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [term, setTerm] = useState("Anything");

//   return (
//     <div>
//       <div className="bg-white">
//         <div className="logo">
//           <img src="/logo.png" alt="Logo" className="h-10 w-10" />
//           <Input
//             search={term}
//             setSearch={setTerm}
//             searchBooks={(search) => setTerm(search)}
//           />
//           <nav>
//             <ul className="flex ml-5">
//               <li>
//                 <Link to="/" className="mr-5 focus:text-black">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/quotes" className="mr-6 focus:text-black">
//                   Quotes
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/reader" className="focus:text-black">
//                   Read
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
