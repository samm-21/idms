// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const MainLayout = ({ children }) => {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="main-section">
//         <Header />
//         <div className="content-area">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;





// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// const MainLayout = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
      
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right Section */}
//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         {/* Page Content */}
//         <div className="p-6 overflow-y-auto">
//           <Outlet />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default MainLayout;









import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">IDMS</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/employees"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Employees
          </NavLink>

          <NavLink
            to="/add-employee"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Add Employee
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;
