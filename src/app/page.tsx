import Image from 'next/image'
import CommonInfo from '../components/CommonInfo'
import { useMemo } from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
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
      <Link
        href="/detail"
        className=" p-2 border text-white bg-slate-500 rounded-md hover:bg-red-500"
      >
        View Detail
      </Link>
    </MainLayout>
  )
}
