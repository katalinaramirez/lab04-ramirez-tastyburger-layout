import React from 'react'
import type { BurgerItem } from '../types.ts'
import './ProductCard.css'

interface Props {
  product: BurgerItem
  onAddToCart: (item: BurgerItem) => void
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const stars = '⭐'.repeat(product.rating)

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-img" 
      />
      <p className="product-rating">{stars}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <p className="product-price">₱{product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard

