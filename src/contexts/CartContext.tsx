import produce from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

export type Operation = 'increase' | 'decrease'

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (cartItemId: number, operation: Operation) => void
  removeItemInCart: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storagedCartItems) {
      return JSON.parse(storagedCartItems)
    }
    return []
  })
  const cartQuantity = cartItems.length
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)
  function addCoffeeToCart(coffe: CartItem) {
    const coffeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffe.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistsInCart === -1) {
        draft.push(coffe)
      } else {
        draft[coffeAlreadyExistsInCart].quantity += coffe.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, operation: Operation) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          operation === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeItemInCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeItemInCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
