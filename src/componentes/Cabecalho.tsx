import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Tv, UserCircle2 } from 'lucide-react';

export function Cabecalho() {
	const [menuAberto, setMenuAberto] = React.useState(false);
	const location = useLocation();

	const isActive = (path: string) => {
		if (path === '/') {
			return location.pathname === path;
		}
		return location.pathname.startsWith(path);
	};

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

	const menuItems = [
		{ path: '/', label: 'Início' },
		{ path: '/planos', label: 'Planos' },
		{ path: '/servicos', label: 'Serviços' },
		{ path: '/criar-servidor', label: 'Como Criar Servidor' },
		{ path: '/contato', label: 'Contato' }
	];

	return (
		<header className="bg-white/90 backdrop-blur-md border-b border-secondary-100 sticky top-0 z-50 transition-all duration-300">
			<nav className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<Link to="/" className="flex items-center space-x-2 group">
						<Tv size={28} className="text-primary-600 transition-transform duration-300 group-hover:rotate-12" />
						<span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 text-transparent bg-clip-text">
							IPTV Pro
						</span>
					</Link>

					{/* Menu Desktop */}
					<div className="hidden md:flex space-x-8">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`relative py-2 text-secondary-600 hover:text-primary-600 transition-colors group ${isActive(item.path) ? 'text-primary-600 font-medium' : ''
									}`}
							>
								{item.label}
								<span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transform origin-left transition-transform duration-300 ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
									} group-hover:scale-x-100`}></span>
							</Link>
						))}
					</div>

					<div className="hidden md:flex">
						<Link
							to="/area-cliente"
							className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium relative group overflow-hidden rounded-lg"
						>
							<div className="absolute inset-0 bg-primary-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
							<UserCircle2 size={20} className="relative z-10" />
							<span className="relative z-10">Área do Cliente</span>
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
					<div className="md:hidden mt-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg p-2">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`block px-4 py-2 rounded-md transition-all duration-200 ${isActive(item.path)
									? 'bg-primary-50 text-primary-600 font-medium'
									: 'text-secondary-600 hover:bg-gray-50 hover:text-primary-600'
									}`}
								onClick={() => setMenuAberto(false)}
							>
								{item.label}
							</Link>
						))}
						<div className="pt-2 mt-2 border-t border-secondary-100">
							<Link
								to="/area-cliente"
								className="flex items-center justify-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors"
								onClick={() => setMenuAberto(false)}
							>
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