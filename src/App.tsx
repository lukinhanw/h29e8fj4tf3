import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import { Inicio } from './paginas/Inicio';
import { Planos } from './paginas/Planos';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/planos" element={<Planos />} />
        </Routes>
        <Rodape />
      </div>
    </Router>
  );
}

export default App