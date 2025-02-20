import React from 'react';
import { Server, Database, Globe, Shield, Settings, Terminal, Monitor, Zap, MessageSquare, Tv, HardDrive, Network, Users, Clock } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { CONTATO } from '../config/contato';

type PassoType = {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  detalhes?: string[];
};

type ConsideracaoType = {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
};

export function CriarServidor() {
  useScrollToTop();

  const handleWhatsApp = () => {
    const message = CONTATO.WHATSAPP.MENSAGEM_PADRAO;
    window.open(`https://wa.me/${CONTATO.WHATSAPP.NUMERO}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const passos: PassoType[] = [
    {
      titulo: "Entendendo o Restream IPTV",
      descricao: "Compreenda o funcionamento básico de um serviço de restream IPTV",
      icone: <Tv className="w-8 h-8 text-primary-600" />,
      detalhes: [
        "Sistema que gera e distribui sinais de TV ao vivo",
        "Gerenciamento automático da grade de canais",
        "Suporte a canais SD, HD e Full HD",
        "Transmissão com baixa latência para eventos ao vivo"
      ]
    },
    {
      titulo: "Infraestrutura Necessária",
      descricao: "Requisitos básicos para montar um servidor IPTV",
      icone: <Server className="w-8 h-8 text-primary-600" />,
      detalhes: [
        "Servidor dedicado com alta performance",
        "Link dedicado de internet (mínimo 1Gbps)",
        "Capacidade de processamento adequada",
        "Armazenamento suficiente para conteúdo VOD"
      ]
    },
    {
      titulo: "Sistema de Gerenciamento",
      descricao: "Ferramentas necessárias para administrar o serviço",
      icone: <Settings className="w-8 h-8 text-primary-600" />,
      detalhes: [
        "Painel de controle para gerenciamento de usuários",
        "Sistema de gestão de revendedores",
        "Monitoramento de conexões simultâneas",
        "Interface de administração do conteúdo"
      ]
    },
    {
      titulo: "Requisitos Técnicos",
      descricao: "Conhecimentos necessários para operação",
      icone: <Terminal className="w-8 h-8 text-primary-600" />,
      detalhes: [
        "Experiência com administração de servidores",
        "Conhecimento em redes e protocolos de streaming",
        "Familiaridade com sistemas de monitoramento",
        "Gestão de tráfego e balanceamento de carga"
      ]
    },
    {
      titulo: "Dimensionamento",
      descricao: "Como calcular a capacidade do seu sistema",
      icone: <Users className="w-8 h-8 text-primary-600" />,
      detalhes: [
        "Cálculo de banda por usuário (2Mbps para SD, 4-5Mbps para HD)",
        "Planejamento de conexões simultâneas",
        "Distribuição geográfica dos usuários",
        "Redundância e escalabilidade"
      ]
    }
  ];

  const consideracoes: ConsideracaoType[] = [
    {
      titulo: "Tempo de Dedicação",
      descricao: "O gerenciamento de um servidor IPTV requer dedicação contínua e monitoramento constante.",
      icone: <Clock className="w-6 h-6 text-primary-600" />
    },
    {
      titulo: "Equipe Técnica",
      descricao: "É recomendável ter uma equipe para manutenção e suporte, pois o serviço exige atenção 24/7.",
      icone: <Users className="w-6 h-6 text-primary-600" />
    },
    {
      titulo: "Investimento Inicial",
      descricao: "Considere os custos com infraestrutura, licenças e sistemas de gerenciamento.",
      icone: <HardDrive className="w-6 h-6 text-primary-600" />
    },
    {
      titulo: "Qualidade de Serviço",
      descricao: "A estabilidade e qualidade do streaming dependem diretamente da infraestrutura utilizada.",
      icone: <Network className="w-6 h-6 text-primary-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary-950 to-primary-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Criar um Servidor IPTV
            </h1>
            <p className="text-xl text-gray-300">
              Guia completo para configurar seu próprio servidor IPTV de forma profissional e segura
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introdução */}
            <div className="text-center mb-16">
              <p className="text-lg text-secondary-600">
                Configurar um servidor IPTV requer conhecimento técnico e atenção aos detalhes. 
                Siga este guia passo a passo para criar uma infraestrutura robusta e profissional.
              </p>
            </div>

            {/* Passos */}
            <div className="space-y-8 mb-16">
              {passos.map((passo, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      {passo.icone}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {index + 1}. {passo.titulo}
                      </h3>
                      <p className="text-secondary-600 mb-4">{passo.descricao}</p>
                      {passo.detalhes && (
                        <ul className="list-disc list-inside space-y-2 text-secondary-600 ml-4">
                          {passo.detalhes.map((detalhe, idx) => (
                            <li key={idx}>{detalhe}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Considerações Importantes */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">Considerações Importantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consideracoes.map((item, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start gap-4">
                      {item.icone}
                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-2">{item.titulo}</h3>
                        <p className="text-secondary-600 text-sm">{item.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="card p-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
                <p className="mb-6">
                  Nossa equipe está pronta para ajudar você a entender melhor os requisitos e desafios de montar seu próprio servidor IPTV.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <MessageSquare size={20} />
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 