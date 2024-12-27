import { NavBar } from "./components/nav-bar"
import { HeroSlider } from "./components/hero-slider"
import { LocationCard } from "./components/location-card"
import { FloatingElements } from "./components/floating-elements"

const locations = [
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Andaman Islands",
    views: 5078,
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Misty morning, Great Wall of China",
    views: 7023,
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "The Charyn and the Lunar Canyons in Kazakhstan",
    views: 4281,
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Porto Katsiki beach, Lefkada, Greece",
    views: 11384,
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Maldives from above",
    views: 9454,
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Sahara Desert at sunset",
    views: 18034,
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingElements />
      <NavBar />
      <HeroSlider />
      <section className="container mx-auto px-4 py-16 relative">
        <h2 className="text-3xl font-bold text-center mb-12">360° Photo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </section>
    </main>
  )
}

