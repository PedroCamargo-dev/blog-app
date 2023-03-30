import Button from '@/common/components/Button'
import Form from '@/common/components/Form'
import Input from '@/common/components/Input'
import Toast from '@/common/components/Toast'
import { useRegister } from '../../hooks/useRegister'

export default function Register() {
  const [register, handleSubmit, errors, onFormSubmit] = useRegister()

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} title="Cadastrar">
      <Toast />
      <Input
        label="Nome Completo"
        type="text"
        extraClass="border-dark-violet-500 w-56 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="name"
        placeholder="Pedro Camargo"
        name={{ ...register('name') }}
      />
      {errors.name?.message && (
        <p className="mb-2 mr-3 grid w-56 justify-items-end text-sm text-vivid-red">
          {errors.name.message}
        </p>
      )}
      <Input
        label="E-mail"
        type="text"
        extraClass="border-dark-violet-500 w-56 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="email"
        placeholder="pedro@camargo.com"
        name={{ ...register('email') }}
      />
      {errors.email?.message && (
        <p className="mb-2 mr-3 grid w-56 justify-items-end text-sm text-vivid-red">
          {errors.email.message}
        </p>
      )}
      <Input
        label="Usuário"
        type="text"
        extraClass="border-dark-violet-500 w-56 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="username"
        placeholder="pedrocamargo"
        name={{ ...register('username') }}
      />
      {errors.username?.message && (
        <p className="mb-2 mr-3 grid w-56 justify-items-end text-sm text-vivid-red">
          {errors.username.message}
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
        <p className="mb-2 mr-3 grid w-56 justify-items-end text-sm text-vivid-red">
          {errors.password.message}
        </p>
      )}
      <Button
        label="Cadastrar"
        extraClass="border border-dark-violet-400 py-2.5 text-dark-violet-400 hover:bg-dark-violet-500 hover:text-white focus:bg-dark-violet-500 focus:text-white"
      />
    </Form>
  )
}
