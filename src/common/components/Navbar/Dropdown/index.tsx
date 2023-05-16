import { useState } from 'react'
import NavItem from '../NavItem'
import { useUser } from '@/common/hooks/useUser'

export default function Dropdown({ title }: string | any) {
  const [open, setOpen] = useState(true)
  const [user] = useUser()

  return (
    <>
      <ul
        className="text-md my-5 cursor-pointer md:my-0 md:ml-8"
        onClick={() => setOpen(!open)}
      >
        {title}
      </ul>
      <div
        className={`shadow-3xl fixed -ml-9 h-auto w-full rounded-md bg-dark-blue-500 md:ml-5 md:mt-[25rem] md:w-72
        ${!open ? 'show' : 'hidden'}`}
      >
        <NavItem
          extrasClass="py-3 ml-20 hover:underline duration-400"
          title={user.name}
          href={{
            pathname: '/User/[user]',
            query: { user: user.username },
          }}
        />
        <NavItem
          extrasClass="py-3 ml-20 hover:underline duration-400"
          title="Publicar novo conteúdo"
          href="/Posts/Novo-post"
        />
        <NavItem
          extrasClass="py-3 ml-20 hover:underline duration-400"
          title="Meus conteúdos"
          href="#"
        />
        <NavItem
          extrasClass="py-3 ml-20 hover:underline duration-400"
          title="Editar perfil"
          href="#"
        />
        <NavItem
          extrasClass="py-3 ml-20 hover:underline duration-400 text-vivid-red"
          title="Deslogar"
          href="#"
        />
      </div>
    </>
  )
}
