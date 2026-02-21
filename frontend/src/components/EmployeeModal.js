import React, { useState } from "react";
import axios from "axios";
import "./EmployeeModal.css";

const API = "http://localhost:5000";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

export default function EmployeeModal({ close, refresh }) {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    gender: ""
  });
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.fullName?.trim()) return "Full name is required.";
    if (!form.dob) return "Date of birth is required.";
    if (!form.email?.trim()) return "Email is required.";
    if (!EMAIL_REGEX.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.phone?.trim()) return "Phone number is required.";
    if (!PHONE_REGEX.test(form.phone.trim())) return "Phone number must be exactly 10 digits.";
    if (!form.department) return "Department is required.";
    if (!form.designation) return "Designation is required.";
    if (!form.gender) return "Gender is required.";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append("fullName", form.fullName.trim());
      data.append("dob", form.dob);
      data.append("email", form.email.trim());
      data.append("phone", form.phone.trim());
      data.append("department", form.department);
      data.append("designation", form.designation);
      data.append("gender", form.gender);
      if (photo) data.append("photo", photo);

      await axios.post(`${API}/api/employees`, data, { withCredentials: true });
      refresh();
      close();
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to save employee.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Create Employee</h2>
          <button type="button" className="modal-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>
        <form onSubmit={submit} className="modal-form">
          <div className="modal-row">
            <div className="modal-field">
              <label className="modal-label">Full Name <span className="required">*</span></label>
              <input
                className="modal-input"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
            </div>
            <div className="modal-field">
              <label className="modal-label">DOB <span className="required">*</span> <span className="modal-hint">(dd-mm-yyyy)</span></label>
              <input
                type="date"
                className="modal-input modal-input-date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-row">
            <div className="modal-field">
              <label className="modal-label">Email <span className="required">*</span></label>
              <input
                type="email"
                className="modal-input"
                placeholder="email@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="modal-field">
              <label className="modal-label">Contact <span className="required">*</span></label>
              <input
                type="tel"
                className="modal-input"
                placeholder="10 digits"
                maxLength={10}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              />
            </div>
          </div>
          <div className="modal-row">
            <div className="modal-field">
              <label className="modal-label">Department <span className="required">*</span></label>
              <select
                className="modal-select"
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
              >
                <option value="">Select</option>
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
            </div>
            <div className="modal-field">
              <label className="modal-label">Designation <span className="required">*</span></label>
              <select
                className="modal-select"
                value={form.designation}
                onChange={(e) => setForm({ ...form, designation: e.target.value })}
              >
                <option value="">Select</option>
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
            </div>
            <div className="modal-field">
              <label className="modal-label">Gender <span className="required">*</span></label>
              <select
                className="modal-select"
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="modal-field">
            <label className="modal-label">Employee Photo <span className="required">*</span></label>
            <div className="modal-file-wrap">
              <input
                type="file"
                accept="image/*"
                id="employee-photo-upload"
                className="modal-file"
                onChange={(e) => setPhoto(e.target.files[0] || null)}
              />
              <label htmlFor="employee-photo-upload" className="modal-file-label">Upload Photo</label>
            </div>
          </div>
          {error && <p className="modal-error">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="modal-btn modal-btn-secondary" onClick={close}>
              Cancel
            </button>
            <button type="submit" className="modal-btn modal-btn-primary" disabled={loading}>
              {loading ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
