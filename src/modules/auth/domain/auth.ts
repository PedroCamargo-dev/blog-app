import { AuthProps } from '../interfaces/IAuth'
import { res } from '../api'
import jwt_decode from 'jwt-decode'
import { setCookie } from 'cookies-next'

export const auth = async ({ email, password }: AuthProps) => {
  try {
    const response = await res.authToken({ email, password })
    if (!response.statusCode) {
      setCookie('accessToken', response.data.accessToken)
      const token = jwt_decode(response.data.accessToken)
      return token
    }
    return response
  } catch (err) {
    const error = err.response.data.message
    return error
  }
}
