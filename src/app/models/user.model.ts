export interface RegisterForm {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface TokenInfos {
  id: number;
  fullName: string;
  role: string;
  tokenLimitDate: Date;
}

export interface Token {
  token: string;
}
