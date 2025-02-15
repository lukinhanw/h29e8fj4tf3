import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { planos } from '../dados/planos';
import { CreditCard, CheckCircle2, AlertCircle, Smartphone, Mail, Calendar, Lock } from 'lucide-react';
import { MaskedInput } from '../componentes/MaskedInput';

export function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plano] = useState(() => planos.find(p => p.id === Number(id)));
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    termos: false
  });
  const [conexoesPersonalizadas, setConexoesPersonalizadas] = useState(100);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!plano) {
      navigate('/');
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [plano, navigate]);

  if (!plano) return null;

  const calcularPrecoFinal = () => {
    if (plano.conexoes === 'personalizado') {
      return conexoesPersonalizadas * (plano.precoBase || 0);
    }
    return plano.preco;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.whatsapp) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (formData.whatsapp.replace(/\D/g, '').length !== 11) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Número do cartão é obrigatório';
    } else if (formData.cardNumber.replace(/\D/g, '').length !== 16) {
      newErrors.cardNumber = 'Número do cartão inválido';
    }

    if (!formData.cardName) {
      newErrors.cardName = 'Nome no cartão é obrigatório';
    }

    if (!formData.cardExpiry) {
      newErrors.cardExpiry = 'Data de validade é obrigatória';
    } else {
      const [month, year] = formData.cardExpiry.split('/');
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiry < new Date()) {
        newErrors.cardExpiry = 'Cartão vencido';
      }
    }

    if (!formData.cardCvv) {
      newErrors.cardCvv = 'CVV é obrigatório';
    } else if (formData.cardCvv.length !== 3) {
      newErrors.cardCvv = 'CVV inválido';
    }

    if (!formData.termos) {
      newErrors.termos = 'Você precisa aceitar os termos e condições';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      // Aqui você implementaria a integração com o gateway de pagamento
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulação
      
      // Redirecionar para página de sucesso ou mostrar modal
      alert('Pedido realizado com sucesso! Em breve você receberá as instruções por email.');
      navigate('/');
    } catch (err) {
      setErrors({ submit: 'Ocorreu um erro ao processar o pagamento. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-secondary-900">Finalizar Contratação</h1>
            <p className="text-secondary-600 mt-2">Complete seus dados para ativar seu plano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Dados de Contato */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-secondary-900">Dados de Contato</h3>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                          Email
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input-field pl-11"
                            placeholder="seu@email.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-danger-600">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-secondary-700 mb-1">
                          WhatsApp
                        </label>
                        <div className="relative">
                          <Smartphone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                          <MaskedInput
                            mask="(00) 00000-0000"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className="input-field pl-11"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        {errors.whatsapp && (
                          <p className="mt-1 text-sm text-danger-600">{errors.whatsapp}</p>
                        )}
                      </div>
                    </div>

                    {/* Plano Personalizado */}
                    {plano.conexoes === 'personalizado' && (
                      <div>
                        <label htmlFor="conexoes" className="block text-sm font-medium text-secondary-700 mb-1">
                          Número de Conexões
                        </label>
                        <input
                          type="number"
                          id="conexoes"
                          min="50"
                          max="999"
                          value={conexoesPersonalizadas}
                          onChange={(e) => setConexoesPersonalizadas(Number(e.target.value))}
                          className="input-field"
                        />
                      </div>
                    )}

                    {/* Dados do Cartão */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-secondary-900">Dados do Pagamento</h3>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-secondary-700 mb-1">
                          Número do Cartão
                        </label>
                        <div className="relative">
                          <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                          <MaskedInput
                            mask="0000 0000 0000 0000"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="input-field pl-11"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        {errors.cardNumber && (
                          <p className="mt-1 text-sm text-danger-600">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-secondary-700 mb-1">
                          Nome no Cartão
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="Como está escrito no cartão"
                        />
                        {errors.cardName && (
                          <p className="mt-1 text-sm text-danger-600">{errors.cardName}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-secondary-700 mb-1">
                            Validade
                          </label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                            <MaskedInput
                              mask="00/00"
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              className="input-field pl-11"
                              placeholder="MM/AA"
                            />
                          </div>
                          {errors.cardExpiry && (
                            <p className="mt-1 text-sm text-danger-600">{errors.cardExpiry}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="cardCvv" className="block text-sm font-medium text-secondary-700 mb-1">
                            CVV
                          </label>
                          <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                            <MaskedInput
                              mask="000"
                              id="cardCvv"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleInputChange}
                              className="input-field pl-11"
                              placeholder="123"
                            />
                          </div>
                          {errors.cardCvv && (
                            <p className="mt-1 text-sm text-danger-600">{errors.cardCvv}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-secondary-100">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="termos"
                          name="termos"
                          checked={formData.termos}
                          onChange={handleInputChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="termos" className="text-sm text-secondary-600">
                          Li e aceito os <a href="/termos" className="text-primary-600 hover:text-primary-700">termos de uso</a> e a{' '}
                          <a href="/privacidade" className="text-primary-600 hover:text-primary-700">política de privacidade</a>
                        </label>
                      </div>
                      {errors.termos && (
                        <p className="mt-1 text-sm text-danger-600">{errors.termos}</p>
                      )}
                    </div>

                    {errors.submit && (
                      <div className="flex items-center gap-2 text-danger-600 bg-danger-50 p-3 rounded-lg">
                        <AlertCircle size={20} />
                        <span>{errors.submit}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Processando...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard size={20} />
                          <span>Finalizar Compra</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div className="md:col-span-1">
              <div className="card p-6 bg-secondary-50 border-secondary-100 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-secondary-900">{plano.nome}</h3>
                    <ul className="mt-2 space-y-2">
                      {plano.recursos.slice(0, 4).map((recurso, index) => (
                        <li key={index} className="flex items-center text-sm text-secondary-600">
                          <CheckCircle2 size={16} className="text-success-500 mr-2 flex-shrink-0" />
                          {recurso.titulo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-secondary-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Total</span>
                      <span className="text-2xl font-bold text-secondary-900">
                        R$ {calcularPrecoFinal().toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-500 mt-1">
                      Cobrança mensal
                    </p>
                  </div>

                  <div className="bg-success-50 p-3 rounded-lg">
                    <p className="text-sm text-success-700 flex items-center gap-2">
                      <CheckCircle2 size={16} className="flex-shrink-0" />
                      Ativação imediata após confirmação do pagamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}