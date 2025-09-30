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
                <h2>Agenda de Contatos</h2>  {/* Corrigindo a tag <h2> */}
                <p>Faça login para continuar</p>  {/* Corrigindo a tag <p> */}
                
                <input
                    type="text"
                    placeholder="Usuario (admin)"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <input
                    type="password"  
                    placeholder="Senha"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="submit">Login</button>  {/* Adicionando um botão de submit */}
            </form>
        </div>
    );
}

export default Login;
