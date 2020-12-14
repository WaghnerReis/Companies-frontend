export interface SignInCredentials {
  email: string;
  password: string;
}

export interface Company {
  id: number,
  email_enterprise: string | null,
  facebook: string | null,
  twitter: string | null,
  linkedin: string | null,
  phone: string | null,
  own_enterprise: boolean,
  enterprise_name: string,
  photo: string,
  description: string,
  city: string,
  country: string,
  value: number,
  share_price: number,
  enterprise_type: {
    id: number,
    enterprise_type_name: string
  }
}
