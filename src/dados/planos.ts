import { Plano, ServicoAdicional } from '../tipos/planos';

const recursosComuns = [
  'Canais FHD, HD, SD',
  'Canais Perperview de Esportes, Reality Shows',
  'Canais 24h personalizados de desenhos e series e filmes',
  'Canais em CDN - Alta Performance',
  'Monitoramento - Página para Conexões Ativas',
  'EPG - Guia de Programação',
  'Suporte Prioritário e Avisos',
  'Filmes & Séries (250.000+ conteúdos)',
];

export const planos: Plano[] = [
  {
    id: 1,
    nome: 'Plano 50 Conexões',
    preco: 200.00,
    conexoes: 50,
    recursos: [
      '50 conexões simultâneas',
      ...recursosComuns,
      '10 conexões de brinde'
    ]
  },
  {
    id: 2,
    nome: 'Plano Personalizado',
    preco: 0,
    conexoes: 'personalizado',
    recursos: [
      'Escolha suas conexões',
      ...recursosComuns,
      '20% de conexões de brinde'
    ],
    destaque: true,
    precoBase: 4,  // R$ 4,00 por conexão
  },
  {
    id: 3,
    nome: 'Plano Full',
    preco: 4000.00,
    conexoes: 1000,
    recursos: [
      '1000 conexões simultâneas',
      ...recursosComuns,
      'Conexões Ilimitadas de Brinde',
      'Prioridade máxima no suporte',
      'Painel administrativo exclusivo'
    ]
  }
];

export const servicosAdicionais: ServicoAdicional[] = [
  {
    id: 1,
    nome: 'Instalação Xtream UI',
    descricao: 'Instalação e configuração completa do Xtream UI em seu servidor',
    preco: 149.90,
    icone: 'Settings'
  },
  {
    id: 2,
    nome: 'Configuração Linux',
    descricao: 'Configuração otimizada de servidor Linux para IPTV',
    preco: 199.90,
    icone: 'Server'
  },
  {
    id: 3,
    nome: 'Load Balancer',
    descricao: 'Configuração de balanceamento de carga para alta disponibilidade',
    preco: 249.90,
    icone: 'Network'
  },
  {
    id: 4,
    nome: 'Painel Office',
    descricao: 'Painel administrativo completo para revendedores',
    preco: 299.90,
    icone: 'LayoutDashboard'
  }
];