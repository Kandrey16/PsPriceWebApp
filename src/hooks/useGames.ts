import { useQuery } from '@apollo/client/react'
import { GET_ALL_GAMES, GET_GAME_BY_SLUG } from '../graphql/query/game'
import { useEffect } from 'react'
import type { GetAllGamesQuery, GetGameBySlug } from '../graphql/types/game'

export function useGames() {
	const { data, error, loading } = useQuery<GetAllGamesQuery>(GET_ALL_GAMES)

	useEffect(() => {
		if (data) {
			console.log('Data is success')
			console.log(data)
		}
	}, [data])

	useEffect(() => {
		if (error) {
			console.error('Query error', error)
		}
	})

	return { data, error, loading, games: data?.games ?? [] }
}

export function useGameBuSlug(slug: string) {
	const { data, error, loading } = useQuery<GetGameBySlug>(GET_GAME_BY_SLUG, {
		variables: { slug },
		skip: !slug,
		notifyOnNetworkStatusChange: true,
	})

	useEffect(() => {
		if (data) {
			console.log('Data is success')
			console.log(data)
		}
	}, [data])

	useEffect(() => {
		if (error) {
			console.error('Query error', error)
		}
	})

	return { data, error, loading, game: data?.game }
}
