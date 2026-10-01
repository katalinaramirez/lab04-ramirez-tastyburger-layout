import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import type { BurgerItem, CartItem } from './types'
import './App.css'

const burgers: BurgerItem[] = [
  {
    id: 1,
    name: 'Crispy Chicken',
    description: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    price: 99.15,
    rating: 5,
    image: '/images/crispy.PNG'
  },
  {
    id: 2,
    name: 'Ultimate Bacon',
    description: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: 99.32,
    rating: 5,
    image: '/images/bacon.PNG'
  },
  {
    id: 3,
    name: 'Black Sheep',
    description: 'American cheese, tomato relish, avocado, red onion',
    price: 69.15,
    rating: 4,
    image: '/images/blacksheep.PNG'
  },
  {
    id: 4,
    name: 'Vegan Burger',
    description: 'Plant-based patty, avocado, tomato, lettuce, cucumber, red onion',
    price: 99.25,
    rating: 4,
    image: '/images/vegan.PNG'
  }
]

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  const handleAddToCart = (item: BurgerItem) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id)
      if (exists) {
        return prev.map(c => c.id === item.id 
          ? { ...c, quantity: c.quantity + 1 }
          : c
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div className="app">
      <Navbar cartCount={totalItems} />
      
      <main className="main-content">
        <h1 className="main-title">OUR CRAZY BURGERS</h1>
        <p className="main-subtitle">Get ready for a wild ride of flavors! Our crazy patties, bold toppings, and irresistible sauce on a perfectly toasted bun.</p>
        
        <div className="burgers-grid">
          {burgers.map(burger => (
            <ProductCard
              key={burger.id}
              product={burger}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
