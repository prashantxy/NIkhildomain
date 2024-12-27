import Link from "next/link"
import { Globe, Menu } from 'lucide-react'
import { Button } from "./ui/button"

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            VirtualVista by Nikhil
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/360-photo" className="text-white hover:text-primary-foreground">
              360° Photo
            </Link>
            <Link href="/360-video" className="text-white hover:text-primary-foreground">
              360° Video
            </Link>
            <Link href="/gallery" className="text-white hover:text-primary-foreground">
              Photogallery
            </Link>
            <Button variant="default" size="sm">
              Price List
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

