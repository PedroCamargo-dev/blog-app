import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import registerUser from '../../domain/register'
import router from 'next/router'
import { RegisterProps } from '../../interfaces/IRegister'
import { registerSchema } from '../components/register/schema'

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onFormSubmit = async ({
    username,
    email,
    name,
    password,
  }: RegisterProps) => {
    const response = await registerUser({ username, email, name, password })

    try {
      if (response.status === 201) {
        router.push('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [register, handleSubmit, errors, onFormSubmit]
}
