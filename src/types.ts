export interface BurgerItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating: number
}

export interface CartItem extends BurgerItem {
  quantity: number
}
