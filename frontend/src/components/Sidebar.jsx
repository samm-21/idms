// import { Link, useLocation } from "react-router-dom"
// import { LayoutDashboard, Users, UserPlus, LogOut } from "lucide-react"

// function Sidebar() {
//   const location = useLocation()

//   const linkStyle = (path) =>
//     `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//       location.pathname === path
//         ? "bg-blue-600 text-white"
//         : "text-gray-700 hover:bg-gray-100"
//     }`

//   return (
//     <div className="w-64 h-screen bg-white shadow-md p-5">
//       <h2 className="text-xl font-bold mb-8">Employee MS</h2>

//       <Link to="/dashboard" className={linkStyle("/dashboard")}>
//         <LayoutDashboard size={18} />
//         Dashboard
//       </Link>

//       <Link to="/employees" className={linkStyle("/employees")}>
//         <Users size={18} />
//         Employees
//       </Link>

//       <Link to="/add-employee" className={linkStyle("/add-employee")}>
//         <UserPlus size={18} />
//         Add Employee
//       </Link>

//       <div className="mt-10 border-t pt-5">
//         <Link to="/login" className="flex items-center gap-3 text-red-500">
//           <LogOut size={18} />
//           Logout
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Sidebar










import { Users, Calendar, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// function Sidebar() {
//   const location = useLocation();

//   const items = [
//     { name: "Employees", path: "/employees", icon: Users },
//     { name: "Leaves", path: "#", icon: Calendar },
//     { name: "Outdoor Duty", path: "#", icon: Briefcase }
//   ];

//   return (
//     <aside className="w-56 bg-white border-r">
//       {items.map((item) => (
//         <Link
//           key={item.name}
//           to={item.path}
//           className={`flex items-center gap-3 px-6 py-4 border-b ${
//             location.pathname === item.path
//               ? "bg-blue-50 text-blue-500"
//               : "text-gray-600"
//           }`}
//         >
//           <item.icon size={18} />
//           {item.name}
//         </Link>
//       ))}
//     </aside>
//   );
// }

// export default Sidebar;




const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-700 text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-10">IDMS</h1>

      <Link to="/dashboard" className="mb-4 hover:bg-purple-600 p-2 rounded">
        Dashboard
      </Link>

      <Link to="/employees" className="mb-4 hover:bg-purple-600 p-2 rounded">
        Employees
      </Link>

      <Link to="/add-employee" className="mb-4 hover:bg-purple-600 p-2 rounded">
        Add Employee
      </Link>
    </div>
  );
};

export default Sidebar;
