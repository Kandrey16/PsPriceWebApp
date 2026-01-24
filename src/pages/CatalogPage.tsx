import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Filter } from '../components/Filter'
import { Input } from '../components/Input'
import { useGames } from '../hooks/useGames'
import { useEffect } from 'react'
import { getStartParam, initTelegram } from '../telegram'
import { routerLinks } from '../route/routes'

export const CatalogPage = () => {
	const navigate = useNavigate()

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
		<div className='flex flex-col items-center max-w-3xl mx-4'>
			<p className='text-white p-6'>PS Price</p>
			<div className='flex flex-row w-full gap-3'>
				<Input />
				<Filter />
			</div>
			<div className='mt-4 w-full overflow-x-auto overscroll-x-contain'>
				<div className='flex gap-3 snap-x px-1'>
					{games.map((game) => (
						<Card key={game.id} data={game} />
					))}
				</div>
			</div>
		</div>
	)
}
