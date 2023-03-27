import { AuthProps } from '../interfaces/IAuth'
import { res } from '../api'
import jwt_decode from 'jwt-decode'
import { login } from '../config'

const auth = async ({ email, password }: AuthProps) => {
  try {
    const response = await res.authToken({ email, password })
    if (!response.statusCode) {
      login(response.data.accessToken)
      const token = jwt_decode(response.data.accessToken)
      return token
    }
    return response
  } catch (err) {
    const error = err.response.data
    return error
  }
}

export default auth
