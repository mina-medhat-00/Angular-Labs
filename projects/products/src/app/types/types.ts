export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}
