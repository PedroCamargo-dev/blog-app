import Link from 'next/link'

export default function NavItem({ href, title, extrasClass }: any) {
  return (
    <li className={`${extrasClass} text-md my-5`}>
      <Link href={href} className="duration-300 hover:text-light-grayish-blue">
        {title}
      </Link>
    </li>
  )
}
