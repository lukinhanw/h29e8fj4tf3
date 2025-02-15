import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tv, Zap, Shield, Users, Star, Clock, Activity, Calendar, Headset as HeadSet, Film, Settings, Building, Crown, LayoutDashboard } from 'lucide-react';
import { planos } from '../dados/planos';

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

export function Inicio() {
  const [conexoesPersonalizadas, setConexoesPersonalizadas] = useState<number>(100);

  const calcularPrecoPersonalizado = (conexoes: number): number => {
    const planoPersonalizado = planos.find(p => p.id === 2);
    if (!planoPersonalizado?.precoBase) return 0;
    return conexoes * planoPersonalizado.precoBase;
  };

  const calcularBrindePersonalizado = (conexoes: number): number => {
    // Calcula um valor aleatório entre 10% e 15%
    const percentualBrinde = Math.random() * (15 - 10) + 10;
    return Math.floor(conexoes * (percentualBrinde / 100));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Principal */}
      <section className="relative bg-gradient-to-r from-secondary-950 to-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transforme seu Servidor em uma
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text"> Central de Entretenimento</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Fontes de canais estáveis e de alta qualidade para seu servidor IPTV.
              Comece agora e ofereça o melhor conteúdo para seus clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                Ver Planos
              </button>
              <Link to="/contato" className="btn-secondary bg-white/10 hover:bg-white/20 text-white">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alta Performance</h3>
              <p className="text-secondary-600">Servidores otimizados para streaming sem travamentos</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Máxima Segurança</h3>
              <p className="text-secondary-600">Proteção contra ataques e monitoramento 24/7</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Premium</h3>
              <p className="text-secondary-600">Atendimento especializado para todas as suas dúvidas</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Tv className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Conteúdo HD</h3>
              <p className="text-secondary-600">Canais em alta definição e qualidade digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha o Plano Ideal</h2>
            <p className="text-xl text-secondary-600">
              Planos flexíveis que se adaptam às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano) => (
              <div
                key={plano.id}
                className={`card p-8 relative ${
                  plano.destaque
                    ? 'bg-gradient-to-br from-white to-primary-50 border-primary-200'
                    : ''
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
                      <span className="text-4xl font-bold">
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
                  <Link
                    to={`/planos/${plano.id}`}
                    className={`w-full ${
                      plano.destaque ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    Contratar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}