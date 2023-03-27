import Link from 'next/link'

export default function NavItem({ href, title }: any) {
  return (
    <li className="text-md my-5 md:my-0 md:ml-8">
      <Link href={href} className="duration-300 hover:text-light-grayish-blue">
        {title}
      </Link>
    </li>
  )
}
