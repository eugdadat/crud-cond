import React, { useState } from "react";
import './App.css';
import Login from './components/login/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválida!!!");
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <h1>Bem-vindo à sua agenda de contatos!</h1>
      <p>Você está logado.</p>
    </div>
  );
}

export default App;
