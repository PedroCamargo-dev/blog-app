import { res } from '../api'
import { RegisterProps } from '../interfaces/IRegister'

const registerUser = async ({
  username,
  email,
  name,
  password,
}: RegisterProps) => {
  try {
    const response = await res.register({ username, email, name, password })
    return response
  } catch (err) {
    const error = err.response.data
    return error
  }
}

export default registerUser
