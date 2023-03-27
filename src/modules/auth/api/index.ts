import { instance } from '../../../infra/apiConfig'
import { AuthProps } from '../interfaces/IAuth'
import { endpoints } from './endpoints'

export const res = {
  authToken: ({ email, password }: AuthProps) =>
    instance.post(endpoints.auth.url, {
      email,
      password,
    }),
}
