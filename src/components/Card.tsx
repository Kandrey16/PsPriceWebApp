import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell'
import { Card } from '@telegram-apps/telegram-ui'
import type { Game } from '../graphql/types/game'

type CardProps = {
	data: Game
	onClick: () => void
}

export function GameCard({ data, onClick }: CardProps) {
	const edition = data.GameEdition?.[0]
	const image = data.GameImage?.[0]
	const version = edition?.GameVersion?.[0]
	const region = version?.GameVersionRegion?.[0]
	const price = region?.Price?.[0]

	const discount = Boolean(price?.discountPercent)

	return (
		<Card onClick={onClick} className='shrink-0 w-64 rounded-xl'>
			<img
				alt={data.title}
				src={image?.url}
				className='w-full rounded-xl object-cover'
			/>
			<CardCell readOnly subtitle={data.title} className='flex py-2'>
				<div className='flex flex-row gap-1'>
					<p className='font-semibold'>{price?.price}</p>
					<span>{price?.currency}</span>
				</div>
				{discount ? (
					<div className='flex flex-row gap-2 items-center'>
						<p className='text-xs line-through'>
							{price?.originalPrice} {price?.currency}
						</p>
						<div className='text-green-400 text-sm'>
							-{price?.discountPercent}%
						</div>
					</div>
				) : (
					''
				)}
			</CardCell>
		</Card>
	)
}

// <div onClick={onClick} className='shrink-0 w-64 rounded-xl  bg-white/5 p-2'>
// 	<img
// 		className='w-full rounded-xl object-cover'
// 		src={image?.url}
// 		alt={data.slug}
// 	/>

// 	<div className='mt-2'>
// 		<div className='flex items-center gap-2 '>
// 			<div className='flex flex-row gap-1'>
// 				<p className='font-semibold'>{price?.price}</p>
// 				<span>{price?.currency}</span>
// 			</div>

// {discount ? (
// 	<div className='flex flex-row gap-2 items-center'>
// 		<p className='text-xs line-through'>
// 			{price?.originalPrice} {price?.currency}
// 		</p>
// 		<div className='text-green-400 text-sm'>
// 			-{price?.discountPercent}%
// 		</div>
// 	</div>
// ) : (
// 	''
// )}
// 		</div>

// 		<p className='mt-1 text-sm font-medium'>{data.title}</p>

// 		<p className='text-xs text-gray-400'>{edition?.name}</p>
// 	</div>
// </div>
