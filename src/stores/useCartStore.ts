import type { Book } from '@/components/Book'
import { create } from 'zustand'

type CartState = {
    cart: Book[]
    addToCart: (book: Book) => void
    countBook: (id: number) => number
}

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],

    addToCart(book: Book) {
        set(state => ({
            cart: [...state.cart, book]
        }))
    },

    countBook(id: number) {
        return get().cart.filter(b => b.id === id).length
    }
}))
