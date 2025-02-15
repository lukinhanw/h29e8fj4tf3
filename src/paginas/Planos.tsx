import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, Zap, Shield, Users, Star, Clock, Activity, 
  Calendar, Headset as HeadSet, Film, Settings, 
  Building, Crown, LayoutDashboard, Check, HelpCircle 
} from 'lucide-react';
import { planos } from '../dados/planos';
import { MaskedInput } from '../componentes/MaskedInput';

const IconeRecurso = ({ nome }: { nome: string }) => {
  const icones = {
    Tv,
    Zap,
    Shield,
    Users,
    Star,
    Clock,
    Activity,
    Calendar,
    HeadSet,
    Film,
    Settings,
    Building,
    Crown,
    LayoutDashboard
  };
  
  const Icone = icones[nome as keyof typeof icones];
  return Icone ? <Icone className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" /> : null;
};

export function Planos() {
  const [conexoesPersonalizadas, setConexoesPersonalizadas] = useState<number>(100);
  const [planoSelecionado, setPlanoSelecionado] = useState<number | null>(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });

  const calcularPrecoPersonalizado = (conexoes: number): number => {
    const planoPersonalizado = planos.find(p => p.id === 2);
    if (!planoPersonalizado?.precoBase) return 0;
    return conexoes * planoPersonalizado.precoBase;
  };

  const calcularBrindePersonalizado = (conexoes: number): number => {
    const percentualBrinde = Math.random() * (15 - 10) + 10;
    return Math.floor(conexoes * (percentualBrinde / 100));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    setMostrarFormulario(false);
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <section className="bg-gradient-to-r from-secondary-950 to-primary-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planos Flexíveis para Seu Negócio
            </h1>
            <p className="text-xl text-gray-300">
              Escolha o plano ideal para suas necessidades e comece a oferecer o melhor conteúdo IPTV para seus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Grid de Planos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {planos.map((plano) => (
              <div
                key={plano.id}
                className={`card p-8 relative transform transition-all duration-300 hover:scale-105 ${
                  plano.destaque
                    ? 'bg-gradient-to-br from-white to-primary-50 border-primary-200 shadow-xl'
                    : 'hover:shadow-xl'
                }`}
              >
                {plano.destaque && (
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    Mais Popular
                  </span>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-900">{plano.nome}</h3>
                  {plano.conexoes === 'personalizado' ? (
                    <div className="mb-6">
                      <div className="mb-4">
                        <label htmlFor="conexoes" className="block text-sm font-medium text-secondary-700 mb-2 antialiased">
                          Número de Conexões
                        </label>
                        <input
                          type="number"
                          id="conexoes"
                          min="50"
                          max="999"
                          value={conexoesPersonalizadas}
                          onChange={(e) => setConexoesPersonalizadas(Number(e.target.value))}
                          className="input-field text-center font-medium text-secondary-900"
                        />
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-secondary-900 antialiased">
                          R$ {calcularPrecoPersonalizado(conexoesPersonalizadas).toFixed(2)}
                        </span>
                        <span className="text-secondary-600 antialiased">/mês</span>
                      </div>
                      <p className="text-sm text-secondary-600 mt-2 antialiased">
                        {calcularBrindePersonalizado(conexoesPersonalizadas)} conexões de brinde
                      </p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-secondary-900">
                        R$ {plano.preco.toFixed(2)}
                      </span>
                      <span className="text-secondary-600">/mês</span>
                    </div>
                  )}
                  <ul className="space-y-4 mb-8 text-left">
                    {plano.recursos.map((recurso, index) => (
                      <li key={index} className="flex items-start">
                        <IconeRecurso nome={recurso.icone} />
                        <div>
                          <h4 className="font-semibold text-secondary-900">{recurso.titulo}</h4>
                          <p className="text-sm text-secondary-600">{recurso.descricao}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setPlanoSelecionado(plano.id);
                      setMostrarFormulario(true);
                    }}
                    className={`w-full ${
                      plano.destaque ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    Contratar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Como funciona o período de teste?</h3>
                    <p className="text-secondary-600">
                      Oferecemos um período de teste de 24 horas para que você possa avaliar a qualidade do nosso serviço antes de fazer a contratação.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Posso mudar de plano depois?</h3>
                    <p className="text-secondary-600">
                      Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento, e o valor será ajustado proporcionalmente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Qual a qualidade dos canais?</h3>
                    <p className="text-secondary-600">
                      Oferecemos canais em qualidade SD, HD e FHD, com servidores otimizados para streaming sem travamentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Formulário */}
      {mostrarFormulario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6">Solicitar Contratação</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-secondary-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-secondary-700 mb-1">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="input-field"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setMostrarFormulario(false)}
                  className="btn-secondary flex-1"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 