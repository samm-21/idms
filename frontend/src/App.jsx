// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"
// import Employees from "./pages/Employees"
// import AddEmployee from "./pages/AddEmployee"

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/employees" element={<Employees />} />
//         <Route path="/add-employee" element={<AddEmployee />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

















// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Employees from "./pages/Employees";
// import MainLayout from "./layouts/MainLayout";

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       <Route element={<MainLayout />}>
//         <Route path="/employees" element={<Employees />} />
//       </Route>

//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// }

// export default App;











// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";

function App() {
  return (
    // <Router>
      <Routes>
        {/* Login page (no sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* All protected pages inside layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="add-employee" element={<AddEmployee />} />
        </Route>
      </Routes>
    // </Router>
  );
}

export default App;
