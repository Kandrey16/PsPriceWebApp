import { useNavigate } from 'react-router-dom'
import { GameCard } from '../components/Card'
import { Filter } from '../components/Filter'
import { CustomInput } from '../components/Input'
import { useGames } from '../hooks/useGames'
import { useEffect } from 'react'
import { getStartParam } from '../telegram'
import { routerLinks } from '../route/routes'

export const CatalogPage = () => {
	const navigate = useNavigate()

	const onCardClick = (slug: string) => {
		navigate(`/game/${slug}`)
	}

	useEffect(() => {
		const startParam = getStartParam()
		if (!startParam) return

		if (startParam.startsWith('game_')) {
			const slug = startParam.replace('game_', '')
			navigate(routerLinks.game(slug), { replace: true })
		}
	}, [])
	const { games } = useGames()

	return (
		<div
			className='flex flex-col bg-tg-bg items-center max-w-3xl mx-4'
		>
			<p className='p-6'>PS Price</p>
			<div className='flex w-full gap-3'>
				<CustomInput />
				<Filter />
			</div>
			<div className='mt-4 w-full overflow-x-auto overscroll-x-contain'>
				<div className='flex gap-3 snap-x px-1'>
					{games.map((game) => (
						<GameCard
							key={game.id}
							data={game}
							onClick={() => onCardClick(game.slug)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
