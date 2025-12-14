 import { useState } from "react";
import api from "../api/axios";
import { useAuthStore } from "../context/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((s) => s.setToken);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signin", { email, password });
      console.log("Signin success:", res.data);
      setToken(res.data.token);
      console.log("Token set, store state:", useAuthStore.getState());
      navigate("/dashboard");
    } catch (err) {
      console.error("Signin failed:", err);
      alert("Signin failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSignin}
        className="flex flex-col gap-4 bg-white shadow-xl p-6 rounded-xl w-80"
      >
        <h1 className="text-2xl font-bold">Signin</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Signin
        </button>
      </form>
    </div>
  );
}
