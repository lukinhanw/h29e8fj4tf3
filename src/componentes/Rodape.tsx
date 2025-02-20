import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Mail, Phone, MapPin } from 'lucide-react';

export function Rodape() {
	return (
		<footer className="bg-secondary-950 text-secondary-300">
			<div className="container mx-auto px-4 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<div className="flex items-center space-x-2 mb-6">
							<Tv size={32} className="text-primary-500" />
							<span className="text-xl font-bold text-white">IPTV Pro</span>
						</div>
						<p className="text-sm leading-relaxed">
							Sua solução completa para fontes de canais IPTV.
							Oferecemos os melhores planos e serviços para seu servidor.
						</p>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/planos" className="hover:text-primary-400 transition-colors">
									Planos
								</Link>
							</li>
							<li>
								<Link to="/servicos" className="hover:text-primary-400 transition-colors">
									Serviços
								</Link>
							</li>
							<li>
								<Link to="/criar-servidor" className="hover:text-primary-400 transition-colors">
									Como Criar Servidor
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-6">Suporte</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/contato" className="hover:text-primary-400 transition-colors">
									Contato
								</Link>
							</li>
							<li>
								<Link to="/area-cliente" className="hover:text-primary-400 transition-colors">
									Área do Cliente
								</Link>
							</li>
							<li>
								<Link to="/politica-privacidade" className="hover:text-primary-400 transition-colors">
									Política de Privacidade
								</Link>
							</li>
							<li>
								<Link to="/termos" className="hover:text-primary-400 transition-colors">
									Termos de Uso
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-6">Contato</h3>
						<ul className="space-y-4">
							<li className="flex items-center space-x-3">
								<Mail size={18} className="text-primary-500" />
								<span>suporte@iptvpro.com.br</span>
							</li>
							<li className="flex items-center space-x-3">
								<Phone size={18} className="text-primary-500" />
								<span>(11) 9999-9999</span>
							</li>
							<li className="flex items-center space-x-3">
								<MapPin size={18} className="text-primary-500" />
								<span>São Paulo, SP</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-secondary-800 mt-12 pt-8 text-center">
					<p className="text-sm text-secondary-400">
						© {new Date().getFullYear()} IPTV Pro. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}