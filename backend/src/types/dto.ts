
interface BeneficioDTO {
  "error": false,
  "status": 200,
  "body": {
    id: string;
    comercio: string;
    description?: string;
    descuento: number;
  }
}


interface BeneficiosDTO {
  "error": false,
  "status": 200,
  "body": {
    "beneficios": [
      {
        id: string;
        comercio: string;
        description?: string;
        descuento: number;
      }
    ]
  }
}

export { BeneficioDTO, BeneficiosDTO  };
