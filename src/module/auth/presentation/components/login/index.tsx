import Button from '@/common/components/Button'
import Form from '@/common/components/Form'
import Input from '@/common/components/Input'

export default function Login() {
  return (
    <Form title="Login">
      <Input
        label="E-mail"
        type="text"
        extraClass="border-dark-violet-500 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="email"
        placeholder="teste@teste.com"
        name={'email'}
      />
      <Input
        label="Senha"
        type="password"
        extraClass="border-dark-violet-500 hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
        id="password"
        placeholder="••••••••••"
        name={'password'}
      />
      <Button
        label="Login"
        extraClass="border border-dark-violet-400 py-2.5 text-dark-violet-400 hover:bg-dark-violet-500 hover:text-white focus:bg-dark-violet-500 focus:text-white"
      />
    </Form>
  )
}
