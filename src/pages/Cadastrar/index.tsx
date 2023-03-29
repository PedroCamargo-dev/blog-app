import Navbar from '@/common/components/Navbar'
import Login from '@/modules/auth/presentation/components/login'
import Register from '@/modules/auth/presentation/components/register'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Register />
    </>
  )
}
