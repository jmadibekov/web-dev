export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface AuthToken {
  access: string;
  refresh: string;
}
