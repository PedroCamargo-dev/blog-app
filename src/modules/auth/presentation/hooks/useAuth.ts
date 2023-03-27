import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { authSchema } from '../components/login/schema'
import { AuthProps } from '../../interfaces/IAuth'
import auth from '../../domain/auth'
import { loginUser } from '../../store/slice'
import { useDispatch } from 'react-redux'
import router from 'next/router'

export const useAuth = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  })

  const onFormSubmit = async ({ email, password }: AuthProps) => {
    const response = await auth({ email, password })

    try {
      if (response.statusCode !== 401) {
        dispatch(loginUser(response))
        router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [register, handleSubmit, errors, onFormSubmit]
}
