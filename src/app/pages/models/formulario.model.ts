export enum helpOptionOptions {
  adopte = 'Adotar',
  temporaryHome = 'Lar Temporário',
  patronize = 'Apadrinhar',
}

export enum comunicationCanals {
  sms = 'SMS',
  whatsapp = 'Whatsapp',
  email = 'E-mail',
}

export interface PetForm {
  personalData: PersonalData;
  address: Address;
  howToHelp: HowToHelp;
}

export interface PersonalData {
  name: string;
  email: number;
  nickName: number;
  date: Date;
  phoneNumber: number;
  cellNumber: number;
  cpf: number;
  socialLink: string;
  zipcode: number;
  address: string;
  number: number;
  city: string;
  state: string;
  helpOption: helpOptionOptions;
}

export interface Address {
  zipcode: number;
  address: string;
  number: number;
  city: string;
  state: string;
}

export interface HowToHelp {
  helpOption: helpOptionOptions;
  petName: string;
  reason: string;
  comment: string;
  reciveNews: boolean;
  comunicationCanal: comunicationCanals[];
}

export interface CepResponse {
    logadouro: string;
    localdiade: string;
    uf: string;
}
