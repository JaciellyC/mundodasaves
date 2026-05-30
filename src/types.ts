export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  weight: string;
  hasDailymanufacture?: boolean;
  notes?: string;
  isSpecialized?: boolean;
  accentColor: string; // Tailwind class color like 'from-sky-500 to-blue-700'
  textColor: string; // e.g. 'text-blue-600'
  bgColor: string; // e.g. 'bg-blue-50'
  iconType: 'bluebird' | 'canario' | 'galo' | 'papagaio' | 'coleiro' | 'sibite' | 'grain' | 'bottle' | 'sacaria';
  description: string;
  image?: string;
}

export type ProductCategory =
  | 'Linha Econômica'
  | 'Linha Premium'
  | 'Linha Super Premium'
  | 'Linha Garrafas'
  | 'Linha Sibite'
  | 'Linha Sacaria';

export interface CompanyInfo {
  name: string;
  cnpj: string;
  phone: string;
  phoneFormatted: string;
  whatsappMessageTemplate: string;
}
