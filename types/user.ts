export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string | null;
  role: 'CUSTOMER' | 'ADMIN' | string;
  isActive?: boolean;
  isBanned?: boolean;
  banReason?: string | null;
  avatar?: string | null;
  resetToken?: string | null;
  resetTokenExpires?: string | null;
  emailVerificationToken?: string | null;
  emailVerificationExpires?: string | null;
  isEmailVerified?: boolean;
  refreshToken?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateUserProfilePayload {
  name?: string;
  phone?: string;
  avatar?: string;
}
