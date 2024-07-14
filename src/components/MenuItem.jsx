import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="hover:text-amber-400">
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline duration-150">{title}</p>
    </Link>
  )
}