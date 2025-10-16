

import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [usuarios, setusuarios] = useState([]);
  
  useEffect(() => {
    getusuarios();
  }, []);

  const getusuarios = async () => {
    const response = await fetch("http://localhost:3000/usuarios");
    const data = await response.json();
    setusuarios(data.usuarios);

  };

  return (
    <div className="app-container">
      <h1 className="app-title">USUARIOS</h1>

      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <div className="usuario-card" key={usuario.id}>
            <img
              src={usuario.image}
              alt={usuario.name}
              className="usuario-image"
            />
            <h2 className="usuario-name">{usuario.name}</h2>
            <p className="usuario-phone">{usuario.phone}</p>
            <p className="usuario-phone">{usuario.email}</p>
            <p className="usuario-phone">{usuario.address}</p>
            <p className="usuario-phone">{usuario.age}</p>
           
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;