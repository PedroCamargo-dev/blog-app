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
      <ul
        className={`w-full bg-dark-blue-500 p-5 py-4 
        ${open ? 'show' : 'hidden'}`}
      >
        <NavItem title={user.name} href="#" />
      </ul>
    </>
  )
}
