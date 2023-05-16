import { FaUserAlt } from 'react-icons/fa'
import Grid from '@/common/components/Grid'
import Title from '@/common/components/Title'
import { useUser } from '@/common/hooks/useUser'
import Button from '@/common/components/Button'
import { useRouter } from 'next/router'

export default function User() {
  const router = useRouter()
  const [user] = useUser()

  return (
    <div className="flex justify-center">
      <Grid cols={1} smcols={1} mdcols={1} gap={4} extraClass="mt-20 p-4">
        <Title title={user.name} extraClass="-ml-5" />
        <div className="w-[40rem]">
          <hr className="my-2 h-px w-full border-light-grayish-blue " />
          <FaUserAlt className="mt-10 h-16 w-full opacity-80" />
          <div className="mt-3 grid justify-center text-center">
            <p className='font-bold"> text-xl'>Nenhum conteúdo encontrado</p>
            <p>Você ainda não fez nenhuma publicação.</p>
            <Button
              label="+ Novo Conteúdo"
              extraClass="border border-dark-violet-400 py-3 mt-5 mb-10 text-dark-violet-400 hover:bg-dark-violet-500 hover:text-white focus:bg-dark-violet-500 focus:text-white"
              onClick={() => router.push('/Posts/Novo-post')}
            />
          </div>
          <hr className="my-2 h-px w-full border-light-grayish-blue " />
        </div>
      </Grid>
    </div>
  )
}
