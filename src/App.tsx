import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import { Inicio } from './paginas/Inicio';
import { Servicos } from './paginas/Servicos';
import { Checkout } from './paginas/Checkout';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/planos/:id" element={<Checkout />} />
        </Routes>
        <Rodape />
      </div>
    </Router>
  );
}

export default App