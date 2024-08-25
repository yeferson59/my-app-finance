import Link from "next/link";

// Componente para los items del menú
const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
      {children}
    </Link>
  </li>
)

export default MenuItem