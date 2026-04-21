import type {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  PasswordResetResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  SocialLoginBackendResponse
} from '@/@types/auth'
import axiosInstance from './axiosInstance'
import type { User } from '@/@types/user'

const normalizeSocialLoginResponse = (data: SocialLoginBackendResponse): LoginResponse => {
  if (!data.accessToken) {
    throw new Error('Social login response is missing access token')
  }

  return {
    access_token: data.accessToken,
    refresh_token: data.refreshToken,
    user: {
      id: data.user.id,
      email: data.user.email,
      full_name: data.user.full_name,
      role: data.user.role,
      user_image: data.user.user_image || '',
      registration_date: new Date().toISOString()
    }
  }
}

//login
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/auth/login', data)

  return response.data
}

//get me
export const getMeApi = async (): Promise<User> => {
  const response = await axiosInstance.get<User>('/auth/me')

  return response.data
}

// logout
export const logoutApi = async (refreshToken?: string | null): Promise<void> => {
  const token = refreshToken ?? localStorage.getItem('refreshToken')
  await axiosInstance.post('/auth/logout', token ? { refresh_token: token } : {})
}

// register
export const registerApi = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<RegisterResponse>('auth/register', data)
  return response.data
}

// google login api - send credential (idToken) from Google One Tap
export const googleLoginApi = async (credential: string): Promise<LoginResponse> => {
  console.log('[authApi] googleLoginApi called with credential')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/google', { credential })
  console.log('[authApi] googleLoginApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// google callback api - exchange authorization code for app tokens
export const googleCallbackApi = async (code: string): Promise<LoginResponse> => {
  console.log('[authApi] googleCallbackApi called with code')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/google/callback', { code })
  console.log('[authApi] googleCallbackApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// github login api - send authorization code
export const githubLoginApi = async (code: string): Promise<LoginResponse> => {
  console.log('[authApi] githubLoginApi called with code')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/github', { code })
  console.log('[authApi] githubLoginApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// github callback api - exchange authorization code for access token then login
export const githubCallbackApi = async (code: string): Promise<LoginResponse> => {
  console.log('[authApi] githubCallbackApi called with code')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/github/callback', { code })
  console.log('[authApi] githubCallbackApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// facebook login api - send authorization code
export const facebookLoginApi = async (code: string): Promise<LoginResponse> => {
  console.log('[authApi] facebookLoginApi called with code')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/facebook', { code })
  console.log('[authApi] facebookLoginApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// facebook callback api - exchange authorization code for access token then login
export const facebookCallbackApi = async (code: string): Promise<LoginResponse> => {
  console.log('[authApi] facebookCallbackApi called with code')
  const response = await axiosInstance.post<SocialLoginBackendResponse>('/auth/facebook/callback', { code })
  console.log('[authApi] facebookCallbackApi response:', response.data)
  return normalizeSocialLoginResponse(response.data)
}

// forgot password api
export const forgotPasswordApi = async (data: ForgotPasswordRequest): Promise<PasswordResetResponse> => {
  console.log('[authApi] forgotPasswordApi called')
  const response = await axiosInstance.post<PasswordResetResponse>('/auth/forgot-password', data)
  console.log('[authApi] forgotPasswordApi response:', response.data)
  return response.data
}

// reset password api
export const resetPasswordApi = async (data: ResetPasswordRequest): Promise<PasswordResetResponse> => {
  console.log('[authApi] resetPasswordApi called')
  console.log('Data: ', data)
  const response = await axiosInstance.post<PasswordResetResponse>('/auth/reset-password', data)
  console.log('[authApi] resetPasswordApi response:', response.data)
  return response.data
}

//
