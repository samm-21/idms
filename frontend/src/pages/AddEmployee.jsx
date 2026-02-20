// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddEmployee() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [department, setDepartment] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Employee Added");
//     navigate("/employees");
//   };

//   return (
//     <div>
//         <h1 className="text-3xl font-bold text-blue-600">
//   Tailwind Working
// </h1>

//       <h2>Add Employee</h2>

//       <form onSubmit={async (newEmp) => {
//   try {
//     const formData = new FormData();

//     formData.append("name", newEmp.name);
//     formData.append("email", newEmp.email);
//     formData.append("contact", newEmp.contact);
//     formData.append("gender", newEmp.gender);
//     formData.append("dob", newEmp.dob);
//     formData.append("department", newEmp.department);
//     formData.append("designation", newEmp.designation);
//     formData.append("photo", newEmp.photo);

//     await axios.post(
//       "http://localhost:5000/api/employees",
//       formData,
//       { withCredentials: true }
//     );

//     fetchEmployees();
//     setIsModalOpen(false);
//   } catch (err) {
//     console.log(err);
//   }
// }}
//  style={{ width: "300px", marginTop: "20px" }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={input}
//         />

//         <input
//           type="text"
//           placeholder="Department"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           style={input}
//         />

//         <button type="submit" style={button}>Add</button>
//       </form>
//     </div>
//   );
// }

// const input = {
//   display: "block",
//   marginBottom: "15px",
//   padding: "10px",
//   width: "100%"
// };

// const button = {
//   padding: "10px",
//   background: "#1e1e2f",
//   color: "white",
//   border: "none"
// };

// export default AddEmployee;

















import { useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

export default function AddEmployee() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: ""
  })

  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(form).forEach(key => {
      formData.append(key, form[key])
    })

    if (image) {
      formData.append("image", image)
    }

    try {
      await api.post("/employees", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      navigate("/employees")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="department" onChange={handleChange} />
      <input name="designation" onChange={handleChange} />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Create</button>
    </form>
  )
}
