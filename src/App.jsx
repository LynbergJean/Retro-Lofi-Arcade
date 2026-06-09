import './App.css'
import Card from './Card'

const arcadeData = [
  {
    id: 1,
    title: "Pac-Man",
    category: "Neon Chill",
    description: "Navigate the neon mazes while listening to low-pass filtered chiptunes. The ultimate late-night retro vibe.",
    link: "https://www.pacman.com",
    image: "https://www.monarchbilliards.com/cdn/shop/products/IMG_4908.jpg"
  },
  {
    id: 2,
    title: "Space Invaders",
    category: "Cosmic Beats",
    description: "Defend the skies to a rhythm of slow, heavy lo-fi basslines and nostalgic space-synth melodies.",
    link: "https://www.taito.co.jp/en",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Street Fighter II",
    category: "Lo-Fi Phonk",
    description: "Perfect your combos to smooth vinyl scratches and jazzy hip-hop loops set in a rainy Tokyo backdrop.",
    link: "https://www.capcom.com",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Galaga",
    category: "Stargazing Synth",
    description: "Interstellar starfighter battles paired with relaxing ambient textures and soft, rhythmic percussion.",
    link: "https://www.bandainamcoent.com",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Donkey Kong",
    category: "Jungle Grooves",
    description: "Leap over barrels to the warm, crackling sound of classic Rhodes piano chords and dusty drum breaks.",
    link: "https://www.nintendo.com",
    image: "https://images.unsplash.com/photo-1566241477600-ac026ad43874?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    title: "Tetris",
    category: "Lofi Study Session",
    description: "Clear columns and organize blocks while a smooth, repetitive jazz-hop loop keeps you perfectly in the zone.",
    link: "https://tetris.com",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    title: "OutRun",
    category: "Synthwave Sunset",
    description: "Drive off into a permanent low-poly pink sunset accompanied by smooth, nostalgic dreamwave beats.",
    link: "https://sega.com",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    title: "Frogger",
    category: "Rainy Day Vibe",
    description: "Help a little pixelated frog cross busy streets to the calming, cozy sound of rain and lo-fi beats.",
    link: "https://www.konami.com",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    title: "Mortal Kombat",
    category: "Late Night Chill",
    description: "Flawless victories met with deep, atmospheric sub-bass lines and crisp, booming snare drums.",
    link: "https://www.warnerbrosgames.com",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    title: "Dig Dug",
    category: "Underground Lo-Fi",
    description: "Tunnel deep below the surface with bouncy, minimalist lo-fi tracks matching your air-pump rhythm.",
    link: "https://www.bandainamcoent.com",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=500&q=80"
  }
]

function App() {
  return (
    <div className="app">
      <header>
        <h1>🕹️ Retro Lofi Arcade</h1>
        <p>Classic arcade games paired with lo-fi vibes for the chill gaming community</p>
      </header>
      <div className="card-grid">
        {arcadeData.map((game) => (
          <Card
            key={game.id}
            title={game.title}
            category={game.category}
            description={game.description}
            image={game.image}
            link={game.link}
          />
            ))}
      </div>
    </div>
  )
}

export default App
