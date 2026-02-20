// const handleLogout = () => {
//   localStorage.removeItem("token")
//   window.location.href = "/login"
// }
// <button onClick={handleLogout}>
//   Logout
// </button>



const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">HR Admin Panel</h2>

      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
