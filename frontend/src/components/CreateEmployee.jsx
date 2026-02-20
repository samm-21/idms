// const CreateEmployee = ({ onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal">

//         <div className="modal-header">
//           <h3>Create OD Request</h3>
//           <span onClick={onClose}>✖</span>
//         </div>

//         <div className="modal-body">
//           <div className="form-row">
//             <input placeholder="Full Name *" />
//             <input placeholder="Email *" />
//             <input placeholder="Contact *" />
//             <select>
//               <option>Gender *</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <input type="date" />
//             <select>
//               <option>Department *</option>
//             </select>
//             <select>
//               <option>Designation *</option>
//             </select>
//             <input type="file" />
//           </div>
//         </div>

//         <div className="modal-footer">
//           <button>Save</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CreateEmployee;





















import { useState } from "react";
import api from "../services/api";

function CreateEmployee({ onClose, onCreated }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    onCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-blue-500">Create Employee</h2>

        <input
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Department"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />

        <input
          placeholder="Designation"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#4a90e2] text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;
