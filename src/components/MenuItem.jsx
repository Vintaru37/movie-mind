import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="hover:text-amber-400 p-2">
        <Icon className="text-2xl sm:hidden" />
        <p className="text-lg capitalize hidden sm:inline duration-150">{title}</p>
    </Link>
  )
}