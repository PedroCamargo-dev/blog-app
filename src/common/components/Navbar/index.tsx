import { isAuthenticated } from '@/modules/auth/config'
import { useState } from 'react'
import { MdClose, MdFolderOpen, MdOutlineMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

export default function Navbar() {
  const [open, setOpen] = useState(true)
  const { user } = useSelector((state) => state.userReducer)

  return (
    <div className="shadown-md fixed top-0 left-0 w-full text-white">
      <div className="items-center justify-between bg-dark-blue-500 py-4 px-7 md:flex md:px-10">
        <div className="flex items-center text-2xl font-bold">
          <span className="mr-1.5 text-3xl font-thin">
            <MdFolderOpen />
          </span>
          DevNews
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-5 cursor-pointer text-3xl md:hidden"
        >
          {!open ? <MdClose /> : <MdOutlineMenu />}
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full bg-dark-blue-500 pt-2 pb-6 pl-9 transition-all duration-500
        ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
          !open ? 'top-11 opacity-100' : 'top-[-490px] '
        }`}
        >
          <NavItem title="Recentes" href="/Recentes" />
          <NavItem title="Relevantes" href="/Relevantes" />
          {isAuthenticated() ? (
            <NavItem title={user.name} href={'user/' + user.username} />
          ) : (
            <>
              <NavItem title="Login" href="/Login" />
              <NavItem title="Cadastrar" href="/Cadastrar" />
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
