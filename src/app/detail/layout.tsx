import MainLayout from '../../components/MainLayout'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainLayout className="h-auto">{children}</MainLayout>
}

export default Layout
