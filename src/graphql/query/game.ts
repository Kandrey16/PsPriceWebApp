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
