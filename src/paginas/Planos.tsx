import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, Zap, Shield, Users, Star, Clock, Activity, 
  Calendar, Headset as HeadSet, Film, Settings, 
  Building, Crown, LayoutDashboard, Check, HelpCircle,
  ChevronDown, ChevronUp 
} from 'lucide-react';
import { planos } from '../dados/planos';
import { MaskedInput } from '../componentes/MaskedInput';
import { CONTATO } from '../config/contato';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';

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

// Adicione o tipo FAQ antes da função principal
type FAQ = {
  pergunta: string;
  resposta: string | React.ReactNode;
};

export function Planos() {
  useScrollToTop();
  const [conexoesPersonalizadas, setConexoesPersonalizadas] = useState<number>(100);
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  const calcularPrecoPersonalizado = (conexoes: number): number => {
    const planoPersonalizado = planos.find(p => p.id === 2);
    if (!planoPersonalizado?.precoBase) return 0;
    return conexoes * planoPersonalizado.precoBase;
  };

  const calcularBrindePersonalizado = (conexoes: number): number => {
    const percentualBrinde = Math.random() * (15 - 10) + 10;
    return Math.floor(conexoes * (percentualBrinde / 100));
  };

  // Função para abrir o WhatsApp com a mensagem de contratação
  const handleContratarAgora = (plano: any) => {
    const message = CONTATO.WHATSAPP.MENSAGEM_CONTRATO(plano.nome);
    window.open(`https://wa.me/${CONTATO.WHATSAPP.NUMERO}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs: FAQ[] = [
    {
      pergunta: "Como funcionam as conexões?",
      resposta: (
        <div className="space-y-4">
          <ul className="text-secondary-600 space-y-2">
            <li>• Cada conexão representa um canal ativo em seu servidor</li>
            <li>• Por exemplo: se você ativar o canal Globo SP HD no seu painel, isso consome 1 conexão, independente do número de clientes assistindo</li>
            <li>• O número de usuários finais assistindo não afeta o consumo de conexões, pois você está fazendo restream do canal</li>
            <li>• Se você tem 50 conexões, significa que pode ter 50 canais diferentes ativos simultaneamente em seu servidor</li>
            <li>• Você gerencia quais canais quer manter ativos através do seu painel de controle</li>
          </ul>
          
          <div className="bg-primary-50 p-4 rounded-lg">
            <p className="font-medium text-primary-900 mb-2">Exemplos práticos:</p>
            <ul className="text-secondary-600 space-y-2">
              <li>• Se você tem 100 clientes assistindo o mesmo canal (ex: Globo SP HD), você consome apenas 1 conexão</li>
              <li>• Se você tem 10 clientes assistindo 10 canais diferentes, você consome 10 conexões</li>
              <li>• Se nenhum cliente está assistindo um canal específico, você pode desativá-lo para economizar conexões</li>
            </ul>
          </div>

          <div className="bg-secondary-50 p-4 rounded-lg">
            <p className="font-medium text-secondary-900 mb-2">Recurso OnDemand:</p>
            <ul className="text-secondary-600 space-y-2">
              <li>• Painéis modernos oferecem o recurso de OnDemand (sob demanda)</li>
              <li>• Com OnDemand, o canal só é ativado quando algum cliente solicita</li>
              <li>• Quando o último cliente para de assistir, o canal é automaticamente desligado, economizando conexões</li>
              <li>• Este recurso permite um melhor aproveitamento do seu plano de conexões</li>
              <li>• A disponibilidade depende do painel de controle que você utiliza (Xtream UI ou similar)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      pergunta: "O que fazer após o pagamento?",
      resposta: "Após efetuar o pagamento, confirme conosco via WhatsApp ou email e retornaremos o mais breve possível."
    },
    {
      pergunta: "Quais são os termos e condições de uso do restreaming?",
      resposta: (
        <ul className="text-secondary-600 space-y-2">
          <li>1. Adicione apenas ao seu servidor, não venda diretamente aos clientes.</li>
          <li>2. Nunca use mais conexões do que o permitido.</li>
          <li>3. Nunca compartilhe nossas conexões diretas publicamente ou venda diretamente.</li>
          <li>4. A violação dessas condições pode resultar no bloqueio permanente da sua linha.</li>
        </ul>
      )
    },
    {
      pergunta: "Por que meu link não está funcionando após o pagamento?",
      resposta: "Pode ser que o IP do seu servidor esteja bloqueado em nosso servidor. Entre em contato conosco via WhatsApp ou email e envie o endereço IP do seu servidor para ser incluído na lista de permissões."
    },
    {
      pergunta: "Como começar com o restream?",
      resposta: "Entre em contato via WhatsApp, solicite um teste e, se gostar, peça as opções de pagamento, efetue o pagamento e comece a usar. Todo o processo é feito pelo WhatsApp."
    },
    {
      pergunta: "Como funciona o período de teste?",
      resposta: "Oferecemos um período de teste de 24 horas para que você possa avaliar a qualidade do nosso serviço antes de fazer a contratação."
    },
    {
      pergunta: "Posso mudar de plano depois?",
      resposta: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento, e o valor será ajustado proporcionalmente."
    },
    {
      pergunta: "Qual a qualidade dos canais?",
      resposta: "Oferecemos canais em qualidade SD, HD e FHD, com servidores otimizados para streaming sem travamentos."
    }
  ];

  const toggleFaq = (index: number) => {
    setFaqAberta(faqAberta === index ? null : index);
  };

  return (
    <Helmet>
      <title>Planos IPTV Pro | Melhor Serviço de Restream IPTV</title>
      <meta name="description" content="Escolha o plano ideal de IPTV para seu negócio. Oferecemos planos flexíveis com conexões ilimitadas, suporte 24/7 e qualidade HD/FHD. Preços a partir de R$ 99,90." />
      <meta name="keywords" content="iptv, restream, planos iptv, servidor iptv, conexões iptv, canais hd, streaming profissional, iptv brasil, servidor streaming" />
      <link rel="canonical" href={`https://iptvpro.com.br${location.pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content="Planos IPTV Pro | Melhor Serviço de Restream IPTV" />
      <meta property="og:description" content="Escolha o plano ideal de IPTV para seu negócio. Oferecemos planos flexíveis com conexões ilimitadas, suporte 24/7 e qualidade HD/FHD." />
      <meta property="og:url" content={`https://iptvpro.com.br${location.pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://iptvpro.com.br/og-image.jpg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Planos IPTV Pro | Melhor Serviço de Restream IPTV" />
      <meta name="twitter:description" content="Escolha o plano ideal de IPTV para seu negócio. Oferecemos planos flexíveis com conexões ilimitadas, suporte 24/7 e qualidade HD/FHD." />
      <meta name="twitter:image" content="https://iptvpro.com.br/twitter-card.jpg" />
      
      {/* Metadados adicionais */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="IPTV Pro" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="pt-BR" />
      <meta name="rating" content="general" />
    </Helmet>

    <main className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/Product">
      <meta itemProp="name" content="Planos IPTV Pro" />
      <meta itemProp="description" content="Serviço profissional de restream IPTV com planos flexíveis" />
      {/* Header da página */}
      <section className="bg-gradient-to-r from-secondary-950 to-primary-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
              Planos Flexíveis para Seu Negócio
            </h1>
            <p className="text-xl text-gray-300 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
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
                className={`card p-8 relative transition-shadow duration-300 ${
                  plano.destaque
                    ? 'bg-gradient-to-br from-white to-primary-50 border-primary-200 shadow-xl'
                    : 'hover:shadow-xl'
                }`}
              >
                {plano.destaque && (
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                    Mais Popular
                  </span>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">{plano.nome}</h3>
                  {plano.conexoes === 'personalizado' ? (
                    <div className="mb-6">
                      <div className="mb-4">
                        <label htmlFor="conexoes" className="block text-sm font-medium text-secondary-700 mb-2 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                          Número de Conexões
                        </label>
                        <input
                          type="number"
                          id="conexoes"
                          min="50"
                          max="999"
                          value={conexoesPersonalizadas}
                          onChange={(e) => setConexoesPersonalizadas(Number(e.target.value))}
                          className="input-field text-center font-medium text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]"
                        />
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                          R$ {calcularPrecoPersonalizado(conexoesPersonalizadas).toFixed(2)}
                        </span>
                        <span className="text-secondary-600 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">/mês</span>
                      </div>
                      <p className="text-sm text-secondary-600 mt-2 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                        {calcularBrindePersonalizado(conexoesPersonalizadas)} conexões de brinde
                      </p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                        R$ {plano.preco.toFixed(2)}
                      </span>
                      <span className="text-secondary-600 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">/mês</span>
                    </div>
                  )}
                  <ul className="space-y-4 mb-8 text-left">
                    {plano.recursos.map((recurso, index) => (
                      <li key={index} className="flex items-start">
                        <IconeRecurso nome={recurso.icone} />
                        <div>
                          <h4 className="font-semibold text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">{recurso.titulo}</h4>
                          <p className="text-sm text-secondary-600 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">{recurso.descricao}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleContratarAgora(plano)}
                    className={`w-full ${
                      plano.destaque ? 'btn-primary' : 'btn-secondary'
                    } [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]`}
                  >
                    Testar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      <h3 className="font-semibold text-lg text-secondary-900 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                        {faq.pergunta}
                      </h3>
                    </div>
                    {faqAberta === index ? (
                      <ChevronUp className="w-5 h-5 text-secondary-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary-600" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      faqAberta === index ? 'max-h-[800px]' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-secondary-600 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                      {faq.resposta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}