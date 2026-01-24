export type Game = {
	id: string
	slug: string
	title: string
	rating: number | null
	GameImage: { url: string ; type: string }[] | null
	GameLanguageSupport:
		| { languageType: string; language: { name: string; code: string } }[]
		| null
	GameEdition:
		| {
				name: string
				GameVersion: {
					SKU: string
					platform: string
					GameVersionRegion: {
						region: { code: string; name: string }
						Price: {
							price: number
              originalPrice: number
							currency: string
							type: string
							discountPercent: number
						}[]
					}[]
				}[]
		  }[]
		| null
}

export type GetAllGamesQuery = {
	games: Game[]
}
