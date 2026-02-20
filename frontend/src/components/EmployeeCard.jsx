export default function EmployeeCard({ employee }) {
  return (
    <div>
      <img
        src={`http://localhost:5000/uploads/${employee.image}`}
        alt=""
        width="100"
      />
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>{employee.department}</p>
      <p>{employee.designation}</p>
    </div>
  )
}
