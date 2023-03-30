import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import registerUser from '../../domain/register'
import router from 'next/router'
import { RegisterProps } from '../../interfaces/IRegister'
import { registerSchema } from '../components/register/schema'
import { toast } from 'react-toastify'

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

    if (response.status === 201) {
      toast.success('Registered success!')
      setTimeout(() => {
        router.push('/Login')
      }, 2000)
    } else {
      toast.error(response.message)
    }
  }

  return [register, handleSubmit, errors, onFormSubmit]
}
