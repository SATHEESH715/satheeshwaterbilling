export interface User {
  id: string; // UUID
  fullName: string;
  email: string;
  mobile: string;
  passwordHash: string;
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}
