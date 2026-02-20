// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import api from "../services/api";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/auth/register", formData);
//       navigate("/employees");
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-10 rounded shadow-md w-96 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-[#4a90e2]">
//           Register Admin
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full px-4 py-2 border rounded"
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full px-4 py-2 border rounded"
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//         />

//         <button
//           type="submit"
//           className="w-full bg-[#d946ef] text-white py-2 rounded hover:bg-pink-600"
//         >
//           Register
//         </button>

//         <button
//           type="button"
//           onClick={() => navigate("/login")}
//           className="w-full text-blue-500 underline"
//         >
//           Back to Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;




import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/auth/register", form)
      navigate("/")
    } catch {
      alert("Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-6 text-center text-pink-600">Register</h2>

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        <button className="w-full bg-pink-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
