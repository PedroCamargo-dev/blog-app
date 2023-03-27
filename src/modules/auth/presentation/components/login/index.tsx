import Button from '@/common/components/Button'
import Form from '@/common/components/Form'
import Input from '@/common/components/Input'
import { useAuth } from '../../hooks/useAuth'

export default function Login() {
  const [register, handleSubmit, errors, onFormSubmit] = useAuth()

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} title="Login">
      <Input
        label="E-mail"
        type="text"
        extraClass="border-dark-violet-500 w-56 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="email"
        placeholder="teste@teste.com"
        name={{ ...register('email') }}
      />
      {errors.email?.message && (
        <p className="mb-2 mr-3 grid justify-items-end text-sm text-vivid-red">
          {errors.email.message}
        </p>
      )}
      <Input
        label="Senha"
        type="password"
        extraClass="border-dark-violet-500 w-56 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="password"
        placeholder="••••••••••"
        name={{ ...register('password') }}
      />
      {errors.password?.message && (
        <p className="mb-2 mr-3 grid justify-items-end text-sm text-vivid-red">
          {errors.password.message}
        </p>
      )}
      <Button
        label="Login"
        extraClass="border border-dark-violet-400 py-2.5 text-dark-violet-400 hover:bg-dark-violet-500 hover:text-white focus:bg-dark-violet-500 focus:text-white"
      />
    </Form>
  )
}
