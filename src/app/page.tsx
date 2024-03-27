import Image from 'next/image'
import CommonInfo from './components/CommonInfo'
import { useMemo } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center py-5 h-screen">
      <div className="w-[800px] h-full flex flex-col items-center border-2 gap-y-5">
        <h1 className="text-3xl font-bold mt-10">PROFILE</h1>
        <Image
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="avatar"
          width={100}
          height={100}
          className="w-40 h-w-40 object-cover rounded-full"
        />
        <div className="mt-10">
          <CommonInfo />
        </div>
        <div className="mt-8">
          <Link
            href="/detail"
            className="text-red-600 underline hover:text-blue-500"
          >
            View Detail
          </Link>
        </div>
      </div>
    </main>
  )
}
