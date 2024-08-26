import Header from "@/components/header/header"

export default function RootLayoutPublic({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center max-w-4xl mx-auto min-h-screen pt-16">
        {children}
      </main>
    </>
  )
}