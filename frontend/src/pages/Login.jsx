// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import api from "../services/api";


// function Login() {
//   const navigate = useNavigate()

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await api.post("/auth/login", formData)

//       // localStorage.setItem("token", res.data.token)

//       navigate("/dashboard")
//     } catch (err) {
//       alert("Invalid credentials")
//     }
//   }

//   return (
//     // <form onSubmit={handleSubmit}>
//     //   <input
//     //     name="email"
//     //     onChange={handleChange}
//     //     placeholder="Email"
//     //   />
//     //   <input
//     //     type="password"
//     //     name="password"
//     //     onChange={handleChange}
//     //     placeholder="Password"
//     //   />
//     //   <button type="submit">Login</button>
//     // </form>

//     <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-white">
//         <div className="absolute top-0 left-0 w-full h-[40%] bg-[#4a90e2] rounded-b-[100%] scale-x-150 transform -translate-y-1/4"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-md px-4">
//         <div className="bg-white rounded-lg shadow-2xl p-10 border border-pink-100">
//           <div className="text-center mb-8">
//             <h1 className="text-[#d946ef] text-5xl font-bold tracking-tighter mb-2">IDMS</h1>
//             <div className="h-[2px] w-24 bg-pink-100 mx-auto mb-4"></div>
//             <p className="text-pink-500 font-medium text-lg">Welcome to HR Admin Panel</p>
//           </div>

//           <form onSubmit={(e) => { e.preventDefault(); onLogin(formData); }} className="space-y-6">
//             <div>
//               <label className="block text-blue-500 text-sm mb-2 font-medium">User Name</label>
//               <input 
//                 type="text" 
//                 placeholder="Enter User Name"
//                 className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600"
//                 required
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//               />
//             </div>

//             <div>
//               <label className="block text-blue-500 text-sm mb-2 font-medium">Enter Password</label>
//               <div className="relative">
//                 <input 
//                   type={showPassword ? "text" : "password"} 
//                   placeholder="Enter Password"
//                   className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600"
//                   required
//                   onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 />
//                 <button 
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-500"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between text-xs text-gray-400 px-1">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="rounded text-blue-500 border-gray-300" />
//                 <span>Show Password</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="rounded text-blue-500 border-gray-300" />
//                 <span>Remember Me</span>
//               </label>
//             </div>

//             <button 
//               type="submit"
//               className="w-full bg-[#4a90e2] text-white py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-all shadow-md active:scale-[0.98]"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-8 pt-6 border-t text-center">
//              <p className="text-sm text-gray-500 mb-4">Don't have an account?</p>
//              <button 
//                 onClick={onGoToRegister}
//                 className="flex items-center gap-2 mx-auto text-pink-500 font-medium hover:text-pink-600 underline underline-offset-4"
//              >
//                 <UserPlus size={16} />
//                 Create Admin Account
//              </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// const container = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "80vh"
// };

// const form = {
//   background: "white",
//   padding: "30px",
//   borderRadius: "8px",
//   width: "300px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "15px"
// };

// const input = {
//   padding: "10px",
// };

// const button = {
//   padding: "10px",
//   background: "#1e1e2f",
//   color: "white",
//   border: "none",
//   cursor: "pointer"
// };

// export default Login;














// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Eye, EyeOff, UserPlus } from "lucide-react";
// import api from "../services/api";

// function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/auth/login", formData);
//       navigate("/employees");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-white">
//         <div className="absolute top-0 left-0 w-full h-[40%] bg-[#4a90e2] rounded-b-[100%] scale-x-150 transform -translate-y-1/4"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-md px-4">
//         <div className="bg-white rounded-lg shadow-2xl p-10 border border-pink-100">
//           <div className="text-center mb-8">
//             <h1 className="text-[#d946ef] text-5xl font-bold mb-2">IDMS</h1>
//             <p className="text-pink-500 font-medium text-lg">
//               Welcome to HR Admin Panel
//             </p>
//             <h1 className="text-red-500 text-4xl">TEST</h1>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-blue-500 text-sm mb-2 font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label className="block text-blue-500 text-sm mb-2 font-medium">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   required
//                   className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3 text-gray-400"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#4a90e2] text-white py-3 rounded-md hover:bg-blue-600 transition-all shadow-md"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <button
//               onClick={() => navigate("/register")}
//               className="flex items-center gap-2 mx-auto text-pink-500 underline"
//             >
//               <UserPlus size={16} />
//               Create Admin Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;










import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/login", form);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-purple-600">
          IDMS
        </h1>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
