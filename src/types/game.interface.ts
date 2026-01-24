export interface IGame {
	id: string
	slug: string
	region: string
	regionId: string
	fullUrl: string

	title: string
	platform: string
	rating: number | null
	image: string | undefined
	genre: string | null
	publisher: string | null

	price: number
	originalPrice: number | null
	currency: string

	hasDiscount: boolean
	discountPercent: number | null
	amount: number | null
	psPlusPrice: number | null
	psPlusRequired: boolean

	hasPsPlus: boolean | null
	subtitles: string[] | null
	voices: string[] | null
	originalImage: string | undefined
}
