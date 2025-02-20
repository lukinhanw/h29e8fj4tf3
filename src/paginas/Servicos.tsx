import React from 'react';
import { servicosAdicionais } from '../dados/planos';
import { Settings, Server, Network, LayoutDashboard, Upload } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const IconeServico = ({ nome }: { nome: string }) => {
	const icones = {
		Settings,
		Server,
		Network,
		LayoutDashboard,
		Upload
	};

	const Icone = icones[nome as keyof typeof icones];
	return Icone ? <Icone className="w-6 h-6" /> : null;
};

export function Servicos() {
	useScrollToTop();
	return (
		<div className="min-h-screen">
			{/* Banner */}
			<section className="relative bg-gradient-to-r from-secondary-950 to-primary-950 text-white py-20">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
				<div className="container mx-auto px-4 relative">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Serviços Adicionais para seu
							<span className="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text"> Servidor IPTV</span>
						</h1>
						<p className="text-xl text-gray-300">
							Maximize o potencial do seu servidor com nossos serviços especializados.
							Configurações otimizadas, instalações profissionais e soluções personalizadas.
						</p>
					</div>
				</div>
			</section>

			{/* Lista de Serviços */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{servicosAdicionais.map((servico) => (
							<div key={servico.id} className="card p-8 flex items-start space-x-6 group hover:shadow-2xl transition-shadow duration-300">
								<div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
									<div className="text-primary-600">
										<IconeServico nome={servico.icone} />
									</div>
								</div>
								<div className="flex-1">
									<div className="flex items-start justify-between gap-4">
										<h3 className="text-xl font-bold mb-2 text-secondary-900">{servico.nome}</h3>
										{servico.tipo === 'mensal' && (
											<span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
												Mensal
											</span>
										)}
									</div>
									<p className="text-secondary-600 mb-4">{servico.descricao}</p>
									<div className="flex items-center justify-between">
										<div>
											<span className="text-2xl font-bold text-primary-600">
												R$ {servico.preco.toFixed(2)}
											</span>
											{servico.tipo === 'mensal' && (
												<span className="text-sm text-secondary-600 ml-1">/mês</span>
											)}
										</div>
										<button className="btn-primary">
											Contratar
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-primary-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Precisa de um Serviço Personalizado?</h2>
					<p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
						Entre em contato com nossa equipe para discutir soluções específicas para seu servidor.
						Estamos prontos para ajudar você a alcançar o máximo desempenho.
					</p>
					<button className="btn-primary">
						Falar com Especialista
					</button>
				</div>
			</section>
		</div>
	);
}