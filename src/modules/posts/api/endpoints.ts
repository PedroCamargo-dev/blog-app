import { getToken } from '@/modules/auth/config'

export const endpoints = {
  newPost: {
    url: '/posts',
    method: 'POST',
    accessToken: `Bearer ${getToken()}`,
  },
}
