'use client'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation"
export default function () {
    const router = useRouter();
  return (
    <button className='flex items-center gap-2 py-2 px-8 border border-gray-500 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-150' onClick={() => router.back()}><IoMdArrowRoundBack /> Back</button>
  )
}