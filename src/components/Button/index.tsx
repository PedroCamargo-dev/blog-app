interface Props {
  children: React.ReactNode
}

export default function Button({children}: Props){
  return (
    <button className="bg-indigo-600 text-white py-2 mr-1 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
      {children}
    </button>
  )
}
