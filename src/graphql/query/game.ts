import { gql } from '@apollo/client'

export const GET_ALL_GAMES = gql`
	query GetAllGames {
		games {
			id
			slug
			title
			rating
			GameImage {
				url
				type
			}
			GameLanguageSupport {
				languageType
				language {
					name
					code
				}
			}
			GameEdition {
				name
				GameVersion {
					SKU
					platform
					GameVersionRegion {
						region {
							code
							name
						}
						Price {
							price
							originalPrice
							currency
							type
							discountPercent
						}
					}
				}
			}
		}
	}
`
export const GET_GAME_BY_SLUG = gql`
	query getGameBySlug($slug: String!) {
		game(slug: $slug) {
			id
			slug
			title
			rating
			GameImage {
				url
				type
			}
			GameLanguageSupport {
				languageType
				language {
					name
					code
				}
			}
			GameEdition {
				name
				GameVersion {
					SKU
					platform
					GameVersionRegion {
						region {
							code
							name
						}
						Price {
							price
							originalPrice
							currency
							type
							discountPercent
						}
					}
				}
			}
		}
	}
`
