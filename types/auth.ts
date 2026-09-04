import { ApiResponse } from './api';
import { User } from './user';

// Welcome Coupon Type
export interface WelcomeCoupon {
  code: string;
  discount: string;
  description: string;
}

// Registration Types
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface RegisterResponseData {
  emailSent: boolean;
  welcomeCoupon?: WelcomeCoupon;
  access_token: string;
  refresh_token: string;
  user: User;
}

export type RegisterResponse = ApiResponse<RegisterResponseData>;

// Verify Email Types
export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export type VerifyEmailResponse = ApiResponse<null | any>;

// Resend OTP / Verification Types
export interface ResendOtpRequest {
  email: string;
}

export type ResendOtpResponse = ApiResponse<null | any>;

// Login Types
export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface LoginResponseData {
  access_token: string;
  refresh_token: string;
  user: User;
}

export type LoginResponse = ApiResponse<LoginResponseData>;
