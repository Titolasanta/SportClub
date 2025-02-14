

export interface BenefitInfo {
  beneficios: BenefitInfoDetail[]
}

export interface BenefitInfoDetail {
  id: number;
  comercio: string;
  descripcion: string;
  aclaratoria: string;
  tarjeta: boolean;
  sprites: {front_default: string};
  descuento: number;        
  efectivo: boolean;       
  Dium: Dium;     
  Imagens: Image[];
  payclub: boolean;
  puntuacion: number;
}

export interface Dium {
  id: number;
  lunes: boolean;    
  martes: boolean;    
  miercoles: boolean;    
  jueves: boolean;
  viernes: boolean;    
  domingo: boolean;           
  feriados: boolean;      
}
export interface Image {
  id: number;
  url: string;    
}