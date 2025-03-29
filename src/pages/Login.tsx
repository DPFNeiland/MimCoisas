import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  success: boolean;
}

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post<LoginResponse>("http://localhost:5000/login", { password });
      if (response.data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      }
    } catch (error) {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login de Administrador</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
