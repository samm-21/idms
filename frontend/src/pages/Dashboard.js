import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeModal from "../components/EmployeeModal";
import "./Dashboard.css";

const API = "http://localhost:5000";

const SIDEBAR_MENU = [
  { id: "employee", label: "Employee", icon: "employee.svg", active: true },
  { id: "leaves", label: "Leaves", icon: "leaves.svg", active: false },
  { id: "holidays", label: "Holidays", icon: "holidays.svg", active: false },
  { id: "outdoor", label: "Outdoor Duty", icon: "outdoor_duty.svg", active: false },
  { id: "expense", label: "Expense", icon: "expense.svg", active: false },
  { id: "attendance", label: "Attendance", icon: "attendance.svg", active: false },
  { id: "it", label: "IT Computation", icon: "it_computation.svg", active: false },
  { id: "salary", label: "Salary", icon: "salary.svg", active: false },
  { id: "documents", label: "Documents", icon: "documents.svg", active: false },
  { id: "training", label: "Training & Dev.", icon: "training.svg", active: false },
  { id: "performance", label: "Performance", icon: "performance.svg", active: false },
  { id: "policies", label: "HR Policies", icon: "policies.svg", active: false },
  { id: "reports", label: "Reports", icon: "reports.svg", active: false },
  { id: "support", label: "Support", icon: "support.svg", active: false },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      if (filterDept) params.set("department", filterDept);
      if (filterDesignation) params.set("designation", filterDesignation);
      if (filterGender) params.set("gender", filterGender);
      const res = await axios.get(`${API}/api/employees?${params.toString()}`, {
        withCredentials: true
      });
      setEmployees(res.data);
    } catch (err) {
      if (err.response?.status === 401) navigate("/");
    } finally {
      setLoading(false);
    }
  }, [search, filterDept, filterDesignation, filterGender, navigate]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const logout = async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
    } catch (_) {}
    navigate("/");
  };

  const formatDob = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <img src="/assets/idms_logo.svg" alt="IDMS" className="sidebar-logo-img" onError={(e) => { e.target.style.display = "none"; }} />
        </div>
        <nav className="sidebar-nav">
          {SIDEBAR_MENU.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${item.active ? "sidebar-item-active" : ""}`}
              title={item.label}
            >
              <img
                src={`/assets/${item.icon}`}
                alt=""
                className="sidebar-icon"
                onError={(e) => { e.target.onerror = null; e.target.src = "/assets/employee.svg"; }}
              />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-records">
            Total Records → {loading ? "…" : employees.length}
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="dashboard-body">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Employee Setup</h1>
          <button type="button" className="header-logout" onClick={logout}>
            Logout
          </button>
        </header>

        <main className="dashboard-main">
          <div className="dashboard-toolbar">
            <div className="dashboard-search-wrap">
              <img src="/assets/search_icon.svg" alt="" className="search-icon" aria-hidden />
              <input
                type="search"
                className="dashboard-search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="dashboard-filters">
              <select
                className="dashboard-filter"
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
              >
                <option value="">Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Product Development">Product Development</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="Support">Support</option>
                <option value="Legal">Legal</option>
                <option value="Administration">Administration</option>
              </select>
              <select
                className="dashboard-filter"
                value={filterDesignation}
                onChange={(e) => setFilterDesignation(e.target.value)}
              >
                <option value="">Designation</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Senior Software Developer">Senior Software Developer</option>
                <option value="Manager">Manager</option>
                <option value="Senior Manager">Senior Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Developer">Developer</option>
                <option value="HR Executive">HR Executive</option>
                <option value="HR Manager">HR Manager</option>
                <option value="Accountant">Accountant</option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Marketing Specialist">Marketing Specialist</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Intern">Intern</option>
                <option value="Trainee">Trainee</option>
              </select>
              <select
                className="dashboard-filter"
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="button" className="dashboard-create-btn" onClick={() => setShow(true)}>
              <span className="create-btn-plus" aria-hidden>+</span>
              <span>Create</span>
            </button>
          </div>

          <div className="dashboard-table-wrap">
            {loading ? (
              <p className="dashboard-loading">Loading…</p>
            ) : employees.length === 0 ? (
              <div className="dashboard-empty-state">
                <img src="/assets/no_records.svg" alt="" className="empty-state-icon" />
                <p className="dashboard-empty-text">No Records to be displayed</p>
              </div>
            ) : (
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp._id}>
                      <td>{emp.fullName}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.gender}</td>
                      <td>{formatDob(emp.dob)}</td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td>
                        <div className="employee-photo-cell">
                          {emp.photo ? (
                            <img
                              src={`${API}/uploads/${emp.photo}`}
                              alt=""
                              className="employee-photo"
                            />
                          ) : (
                            <span className="employee-photo-placeholder" title="No photo">
                              <img src="/assets/photo.svg" alt="" className="photo-placeholder-icon" onError={(e) => { e.target.style.display = "none"; }} />
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="photo-placeholder-fallback" aria-hidden>
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                              </svg>
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <button type="button" className="action-btn" aria-label="Actions">
                          <img src="/assets/action.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {show && <EmployeeModal close={() => setShow(false)} refresh={fetchEmployees} />}
    </div>
  );
}
