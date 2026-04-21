import axiosInstance from '@/api/axiosInstance'

export type CreateApplicationRequest = {
  jobId: number
  coverLetter?: string
}

export type CreateApplicationResponse = {
  appId: number
  status: string
}

export const createApplication = async (data: CreateApplicationRequest) => {
  const response = await axiosInstance.post<CreateApplicationResponse>('/applications', data)

  return response.data
}
