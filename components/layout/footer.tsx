import Link from "next/link"
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Contact Us", href: "#" },
]

const socialLinks = [
  { name: "Instagram", href: "#", Icon: Instagram },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Twitter", href: "#", Icon: Twitter },
]

export function CoffeeShopFooter() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Coffee className="h-10 w-10 text-amber-500 mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} London Coffee Shops. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-amber-500 transition-colors"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-gray-500 hover:text-amber-500 transition-colors"
            >
              <social.Icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}