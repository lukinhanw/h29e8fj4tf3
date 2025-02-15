export interface Plano {
  id: number;
  nome: string;
  preco: number;
  conexoes: number | 'ilimitado' | 'personalizado';
  recursos: {
    titulo: string;
    descricao: string;
    icone: string;
  }[];
  destaque?: boolean;
  precoBase?: number;
}

export interface ServicoAdicional {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  icone: string;
  tipo: 'unico' | 'mensal';
}