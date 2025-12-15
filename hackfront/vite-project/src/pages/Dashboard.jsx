import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";  
export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="mb-6">
          <p className="text-gray-600">Welcome back!</p>
          <p className="text-xl font-semibold mt-2">{user.username || "User"}</p>
          <p className="text-gray-500">{user.email || ""}</p>
        </div>
        <Button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}