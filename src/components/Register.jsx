import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    email: "",
    mobile_phone: "",
    nip: "",
    pekerjaan: "",
    pendidikan: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login"); // Navigate to login page on successful registration
      } else {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setErrorMessage(data.detail);
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {loading && <p className="loading-message">Loading...</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        {/* Add CSS classes to the rest of the input fields */}
        <label>
          First Name:
          <input
            type="text"
            name="first_Name"
            value={formData.first_Name}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Tanggal Lahir:
          <input
            type="text"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </label>
        <label>
          jenis_kelamin:
          <select
            name="jenis_kelamin"
            value={formData.jenis_kelamin}
            onChange={handleChange}
          >
            <option value="">Select jenis_kelamin</option>
            <option value="pria">pria</option>
            <option value="wanita">wanita</option>
          </select>
        </label>
        <label>
          alamat:
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          mobile_phone Phone:
          <input
            type="text"
            name="mobile_phone"
            value={formData.mobile_phone}
            onChange={handleChange}
          />
        </label>
        <label>
          NIP:
          <input
            type="text"
            name="nip"
            value={formData.nip}
            onChange={handleChange}
            pattern="\d*"
          />
        </label>
        <label>
          pekerjaan:
          <select
            name="pekerjaan"
            value={formData.pekerjaan}
            onChange={handleChange}
          >
            <option value="">Select your pekerjaan</option>
            <option value="ASN">ASN</option>
            <option value="SWASTA">Swasta</option>
            <option value="MAHASISWA">Mahasiswa</option>
            <option value="PELAJAR">Pelajar</option>
            <option value="WIRASWASTA">Wiraswasta</option>
            <option value="PEGAWAI_NEGARA_NON_ASN">
              Pegawai Negara Non ASN
            </option>
            <option value="OTHER">Other</option>
          </select>
        </label>
        <label>
          pendidikan:
          <select
            name="pendidikan"
            value={formData.pendidikan}
            onChange={handleChange}
          >
            <option value="">Select your pendidikan level</option>
            <option value="TK">TK</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="DIPLOMA">Diploma</option>
            <option value="SARJANA">Sarjana</option>
            <option value="MAGISTER">Magister</option>
            <option value="DOKTOR">Doktor</option>
            <option value="OTHER">Other</option>
          </select>
        </label>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
//     <div>
//       <h1>Register</h1>
//       {errorMessage && <p>{errorMessage}</p>}
//       {loading && <p>Loading...</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="first_Name"
//             value={formData.first_Name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="last_name"
//             value={formData.last_name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Tanggal Lahir:
//           <input
//             type="text"
//             name="tanggal_lahir"
//             value={formData.tanggal_lahir}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           jenis_kelamin:
//           <select
//             name="jenis_kelamin"
//             value={formData.jenis_kelamin}
//             onChange={handleChange}
//           >
//             <option value="">Select jenis_kelamin</option>
//             <option value="pria">pria</option>
//             <option value="wanita">wanita</option>
//           </select>
//         </label>
//         <label>
//           alamat:
//           <input
//             name="alamat"
//             value={formData.alamat}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           mobile_phone Phone:
//           <input
//             type="tel"
//             name="mobile_phone"
//             value={formData.mobile_phone}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           NIP:
//           <input
//             type="text"
//             name="nip"
//             value={formData.nip}
//             onChange={handleChange}
//             pattern="\d*"
//           />
//         </label>
//         <label>
//           pekerjaan:
//           <select
//             name="pekerjaan"
//             value={formData.pekerjaan}
//             onChange={handleChange}
//           >
//             <option value="">Select your pekerjaan</option>
//             <option value="ASN">ASN</option>
//             <option value="SWASTA">Swasta</option>
//             <option value="MAHASISWA">Mahasiswa</option>
//             <option value="PELAJAR">Pelajar</option>
//             <option value="WIRASWASTA">Wiraswasta</option>
//             <option value="PEGAWAI_NEGARA_NON_ASN">
//               Pegawai Negara Non ASN
//             </option>
//             <option value="OTHER">Other</option>
//           </select>
//         </label>
//         <label>
//           pendidikan:
//           <select
//             name="pendidikan"
//             value={formData.pendidikan}
//             onChange={handleChange}
//           >
//             <option value="">Select your pendidikan level</option>
//             <option value="TK">TK</option>
//             <option value="SD">SD</option>
//             <option value="SMP">SMP</option>
//             <option value="SMA">SMA</option>
//             <option value="DIPLOMA">Diploma</option>
//             <option value="SARJANA">Sarjana</option>
//             <option value="MAGISTER">Magister</option>
//             <option value="DOKTOR">Doktor</option>
//             <option value="OTHER">Other</option>
//           </select>
//         </label>
//         {/* <button type="submit" disabled={loading}> */}
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

export default Register;
