import React, { useState } from "react"; 
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Agenda de Contatos</h2>
        <p>Faça login para continuar</p>
        
        <input
          type="text"
          placeholder="Usuário (admin)"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          type="password"  
          placeholder="Senha"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
