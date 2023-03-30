import { useState } from 'react'
import { useSelector } from 'react-redux'
import NavItem from '../NavItem'

export default function Dropdown({ title }: any) {
  const [open, setOpen] = useState(true)
  const { user } = useSelector((state: any) => state.userReducer)

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
        <NavItem extrasClass="py-3 ml-20" title={user.name} href="#" />
        <NavItem
          extrasClass="py-3 ml-20 "
          title="Publicar novo conteúdo"
          href="#"
        />
        <NavItem extrasClass="py-3 ml-20 " title="Meus conteúdos" href="#" />
        <NavItem extrasClass="py-3 ml-20 " title="Editar perfil" href="#" />
        <NavItem extrasClass="py-3 ml-20" title="Deslogar" href="#" />
      </div>
    </>
  )
}
