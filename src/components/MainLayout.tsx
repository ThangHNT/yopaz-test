import { twMerge } from 'tailwind-merge'

function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={twMerge('flex justify-center py-5 h-screen ', className)}>
      <div className="w-[800px] h-full flex flex-col items-center border-2 gap-y-5 bg-[#ccc]">
        {children}
      </div>
    </main>
  )
}
export default MainLayout
