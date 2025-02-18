import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Tv, UserCircle2 } from 'lucide-react';

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = React.useState(false);
  const location = useLocation();

  const scrollToPlanos = () => {
    if (location.pathname === '/') {
      const planosSection = document.getElementById('planos');
      if (planosSection) {
        planosSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#planos';
    }
  };

  return (
    <header className="bg-white border-b border-secondary-100 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Tv size={28} className="text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 text-transparent bg-clip-text">
              IPTV Pro
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <Link to="/planos" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Planos
            </Link>
            <Link to="/servicos" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Serviços
            </Link>
            <Link to="/tutorial" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Tutorial
            </Link>
            <Link to="/faq" className="text-secondary-600 hover:text-primary-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contato" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Contato
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link to="/area-cliente" className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium">
              <UserCircle2 size={20} />
              <span>Área do Cliente</span>
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-secondary-600 hover:text-primary-600 transition-colors"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden mt-4 space-y-4 bg-white border-t border-secondary-100 pt-4">
            <Link to="/" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <Link to="/planos" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              Planos
            </Link>
            <Link to="/servicos" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              Serviços
            </Link>
            <Link to="/tutorial" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              Tutorial
            </Link>
            <Link to="/faq" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contato" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors">
              Contato
            </Link>
            <div className="pt-4 border-t border-secondary-100">
              <Link to="/area-cliente" className="flex items-center justify-center gap-2 py-2 text-primary-600 hover:text-primary-700 font-medium">
                <UserCircle2 size={20} />
                <span>Área do Cliente</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}