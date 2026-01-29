import { useParams } from 'react-router-dom'
import { useGameBuSlug } from '../hooks/useGames'
import heart_fill from '../assets/heart-filled.svg'
import heart from '../assets/heart.svg'

import { useFavouriteStore } from '../store/favourite.store'
import { LoadingPage } from './LoaderPage'
import { NoPage } from './NoPage'

export const GamePage = () => {
	const { slug } = useParams<{ slug: string }>()

	const { data, loading, error } = useGameBuSlug(slug ?? '')

	if (loading) return <LoadingPage />
	if (error || !data) return <NoPage />

	const { isInFavourite } = useFavouriteStore()

	const favourite = data ? isInFavourite(data?.game.id) : false

	const edition = data?.game?.GameEdition?.[0]
	const image = data?.game.GameImage?.[1]
	const version = edition?.GameVersion?.[0]
	const region = version?.GameVersionRegion?.[0]
	const price = region?.Price?.[0]

	const discount = Boolean(price?.discountPercent)

	return (
		<div className=''>
			{image?.url && (
				<img
					src={image.url}
					alt={data?.game.title}
					className='rounded-b-3xl opacity-0 animate-fadeIn'
				/>
			)}
			<div className='flex justify-between items-center m-4'>
				<div>
					<span className='text-2xl'>{data?.game.title}</span>
					<div className='flex flex-row gap-1'>
						<p className='font-semibold text-2xl'>{price?.price}</p>
						<span className='font-semibold text-2xl'>{price?.currency}</span>

						{discount ? (
							<div className='flex flex-row gap-2 items-center'>
								<p className='line-through'>
									{price?.originalPrice} {price?.currency}
								</p>
								<div className='text-green-400 text-xl'>
									-{price?.discountPercent}%
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<img src={favourite ? heart_fill : heart} alt='favourite' />
			</div>
		</div>
	)
}
