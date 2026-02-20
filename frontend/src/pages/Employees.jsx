// // import Layout from "../components/Layout"
// // import { useEffect, useState } from "react"
// // import axios from "axios"
// // import api from "../services/api"
// // import EmployeeCard from "../components/EmployeeCard"

// // function Employees() {
// //   const [employees, setEmployees] = useState([])

// //   useEffect(() => {
// //     fetchEmployees()
// //   }, [])

// //   // const fetchEmployees = async () => {
// //   //   try {
// //   //     const res = await axios.get("http://localhost:5000/api/employees")
// //   //     setEmployees(res.data)
// //   //   } catch (err) {
// //   //     console.log(err)
// //   //   }
// //   // }

// //   const fetchEmployees = async () => {
// //     try {
// //       const params = new URLSearchParams();

// //       if (searchQuery) params.append("search", searchQuery);
// //       if (filters.department) params.append("department", filters.department);
// //       if (filters.designation) params.append("designation", filters.designation);
// //       if (filters.gender) params.append("gender", filters.gender);

// //       const res = await axios.get(
// //         `http://localhost:5000/api/employees?${params.toString()}`,
// //         { withCredentials: true }
// //       );

// //       setEmployees(res.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEmployees();
// //   }, [searchQuery, filters]);




// //   return (
// //     <Layout>
// //       <h1 className="text-3xl font-bold mb-6">Employees</h1>

// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <table className="w-full text-left">
// //           <thead>
// //             <tr className="border-b">
// //               <th className="py-3">Image</th>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Department</th>
// //               <th>Designation</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {employees.map((emp) => (
// //               <tr key={emp._id} className="border-b hover:bg-gray-50">
// //                 <td className="py-3">
// //                   <img
// //                     src={`http://localhost:5000/${emp.image}`}
// //                     alt=""
// //                     className="w-10 h-10 rounded-full"
// //                   />
// //                 </td>
// //                 <td>{emp.name}</td>
// //                 <td>{emp.email}</td>
// //                 <td>{emp.department}</td>
// //                 <td>{emp.designation}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </Layout>
// //   )
// // }

// // export default Employees












// import { useEffect, useState } from "react"
// import api from "../services/api"
// import EmployeeCard from "../components/EmployeeCard"

// export default function Employees() {
//   const [employees, setEmployees] = useState([])

//   useEffect(() => {
//     fetchEmployees()
//   }, [])

//   const fetchEmployees = async () => {
//     try {
//       const res = await api.get("/employees")
//       setEmployees(res.data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       {employees.map(emp => (
//         <EmployeeCard key={emp._id} employee={emp} />
//       ))}
//     </div>
//   )
// }











import { useEffect, useState } from "react";
import api from "../services/api";
import CreateEmployee from "../components/CreateEmployee";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchEmployees = async () => {
    const res = await api.get("/employees", {
      params: { search }
    });
    setEmployees(res.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, [search]);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <input
          placeholder="Search..."
          className="border px-4 py-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#4a90e2] text-white px-4 py-2 rounded"
        >
          Create Employee
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-blue-50">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td className="p-3 border">{emp.name}</td>
              <td className="p-3 border">{emp.email}</td>
              <td className="p-3 border">{emp.department}</td>
              <td className="p-3 border">{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <CreateEmployee
          onClose={() => setShowModal(false)}
          onCreated={fetchEmployees}
        />
      )}
    </div>
  );
}

export default Employees;
