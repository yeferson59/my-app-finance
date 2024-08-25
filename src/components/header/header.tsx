'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

// Componente para los items del menú
const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
      {children}
    </Link>
  </li>
)

// Componente para el toggle de tema
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        id="theme-toggle"
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}

// Componente principal del Header
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const menuItems = (
    <>
      <MenuItem href="/">Inicio</MenuItem>
      <MenuItem href="/productos">Productos</MenuItem>
      <MenuItem href="/servicios">Servicios</MenuItem>
      <MenuItem href="/contacto">Contacto</MenuItem>
    </>
  )

  const authItems = (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
      <Button variant="outline" asChild>
        <Link href="/iniciar-sesion">Iniciar sesión</Link>
      </Button>
      <Button asChild>
        <Link href="/registrarse">Registrarse</Link>
      </Button>
    </div>
  )

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
      isScrolled
        ? "bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-md"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Logo
            </Link>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8">
              {menuItems}
            </ul>
            {authItems}
            <ThemeToggle />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-6">
                <ul className="space-y-4">
                  {menuItems}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {authItems}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}