import { instance } from '../../../infra/apiConfig'
import { AuthProps } from '../interfaces/IAuth'
import { RegisterProps } from '../interfaces/IRegister'
import { endpoints } from './endpoints'

export const res = {
  authToken: ({ email, password }: AuthProps) =>
    instance.post(endpoints.auth.url, {
      email,
      password,
    }),
  register: ({ username, email, name, password }: RegisterProps) =>
    instance.post(endpoints.register.url, { username, email, name, password }),
}
