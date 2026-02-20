// import Layout from "../components/Layout"

// function Dashboard() {
//   return (
//     <Layout>
//       <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500">Total Employees</h2>
//           <p className="text-2xl font-bold mt-2">--</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500">Active Employees</h2>
//           <p className="text-2xl font-bold mt-2">--</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500">Departments</h2>
//           <p className="text-2xl font-bold mt-2">--</p>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Dashboard







// const Dashboard = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Total Employees</h2>
//           <p className="text-2xl mt-2">25</p>
//         </div>

//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Leaves Today</h2>
//           <p className="text-2xl mt-2">3</p>
//         </div>

//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Outdoor Duty</h2>
//           <p className="text-2xl mt-2">2</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="text-3xl font-bold text-pink-600 p-6 border-b">
          IDMS
        </div>

        <ul className="mt-4 space-y-2 px-4">
          <li className="bg-blue-50 text-blue-600 p-3 rounded font-medium">
            Employee
          </li>
          <li className="p-3 text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
            Leaves
          </li>
          <li className="p-3 text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
            Holidays
          </li>
          <li className="p-3 text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
            Attendance
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-2xl font-semibold text-gray-700 mb-6">
          Dashboard
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500 text-sm">Total Employees</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">1</h2>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500 text-sm">Total Departments</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">1</h2>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500 text-sm">Active Employees</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">1</h2>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500 text-sm">Inactive Employees</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">0</h2>
          </div>

        </div>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/employees"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Go to Employees
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Dashboard

