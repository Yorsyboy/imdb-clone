import Link from "next/link";

export default function HeaderIcon({ Icon, title, address}) {
  return (
    <div className="mx-4 flex flex-col cursor-pointer hover:text-white active:text-red-400 lg:mx-6">
        <Link href={`${address}`} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="h-8" />
        <p className="hidden my-2 sm:inline text-sm">{title}</p>
        </Link>
    </div>
  )
}
