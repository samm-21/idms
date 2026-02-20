import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post("/auth/logout");
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-[#4a90e2] font-bold text-xl">Employee Setup</h1>

      <div className="flex items-center gap-4">
        <User size={20} />
        <button onClick={handleLogout} className="text-red-500">
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
