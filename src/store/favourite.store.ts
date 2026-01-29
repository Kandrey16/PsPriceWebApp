import { create } from 'zustand'

interface IFavouriteItem {
	id: string
	title: string
	price: number
	image: string
	edition: string
}

interface IFavouriteStore {
	favouriteItems: IFavouriteItem[]
	addToFavourite: (item: IFavouriteItem) => void
	removeFromFavourite: (id: string) => void
	clearAll: () => void
	isInFavourite: (id: string) => boolean
}

export const useFavouriteStore = create<IFavouriteStore>((set, get) => ({
	favouriteItems: [],

	addToFavourite: (item: IFavouriteItem) =>
		set((state) => {
			const exists = state.favouriteItems.some(
				(favouriteItem) => favouriteItem.id === item.id
			)
			if (!exists) {
				return {
					favouriteItems: [...state.favouriteItems, item],
				}
			}
			return state
		}),

	removeFromFavourite: (id: string) =>
		set((state) => ({
			favouriteItems: state.favouriteItems.filter((item) => item.id !== id),
		})),

	clearAll: () => set({ favouriteItems: [] }),

	isInFavourite: (id: string) => {
		return get().favouriteItems.some((item) => item.id === id)
	},
}))
