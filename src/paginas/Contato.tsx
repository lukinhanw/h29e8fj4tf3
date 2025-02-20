import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';
import { MaskedInput } from '../componentes/MaskedInput';
import { CONTATO } from '../config/contato';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Contato() {
	useScrollToTop();
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		telefone: '',
		mensagem: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aqui você implementaria a lógica de envio do email
		console.log('Dados do formulário:', formData);
	};

	const handleWhatsApp = () => {
		const message = CONTATO.WHATSAPP.MENSAGEM_PADRAO;
		window.open(`https://wa.me/${CONTATO.WHATSAPP.NUMERO}?text=${encodeURIComponent(message)}`, '_blank');
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header da página */}
			<section className="bg-gradient-to-r from-secondary-950 to-primary-950 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Entre em Contato
						</h1>
						<p className="text-xl text-gray-300">
							Estamos aqui para ajudar. Entre em contato conosco por email ou WhatsApp.
						</p>
					</div>
				</div>
			</section>

			{/* Seção de Contato */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Formulário */}
						<div className="card p-8">
							<h2 className="text-2xl font-bold mb-6 text-secondary-900">Envie uma Mensagem</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="nome" className="block text-sm font-medium text-secondary-700 mb-1">
										Nome Completo
									</label>
									<input
										type="text"
										id="nome"
										name="nome"
										value={formData.nome}
										onChange={handleInputChange}
										className="input-field"
										required
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="input-field"
										required
									/>
								</div>
								<div>
									<label htmlFor="telefone" className="block text-sm font-medium text-secondary-700 mb-1">
										Telefone
									</label>
									<MaskedInput
										mask="(00) 00000-0000"
										id="telefone"
										name="telefone"
										value={formData.telefone}
										onChange={handleInputChange}
										className="input-field"
										required
									/>
								</div>
								<div>
									<label htmlFor="mensagem" className="block text-sm font-medium text-secondary-700 mb-1">
										Mensagem
									</label>
									<textarea
										id="mensagem"
										name="mensagem"
										value={formData.mensagem}
										onChange={handleInputChange}
										rows={6}
										className="input-field resize-none px-4 py-3 w-full border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
										required
									/>
								</div>
								<button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
									<Send size={18} />
									Enviar Mensagem
								</button>
							</form>
						</div>

						{/* Informações de Contato */}
						<div className="space-y-8">
							<div className="card p-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
								<h2 className="text-2xl font-bold mb-6">Fale Conosco no WhatsApp</h2>
								<p className="mb-6">
									Atendimento rápido e personalizado através do nosso WhatsApp. Estamos prontos para te ajudar!
								</p>
								<button
									onClick={handleWhatsApp}
									className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full transition-colors duration-300"
								>
									<MessageSquare size={20} />
									Iniciar Conversa
								</button>
							</div>

							<div className="card p-8">
								<h3 className="text-xl font-bold mb-6 text-secondary-900">Outras Formas de Contato</h3>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
										<div>
											<h4 className="font-medium text-secondary-900">Email</h4>
											<p className="text-secondary-600">{CONTATO.EMAIL}</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<Phone className="w-6 h-6 text-primary-600 flex-shrink-0" />
										<div>
											<h4 className="font-medium text-secondary-900">Telefone</h4>
											<p className="text-secondary-600">{CONTATO.TELEFONE}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 