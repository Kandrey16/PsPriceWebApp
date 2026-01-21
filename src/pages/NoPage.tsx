import { Image, Placeholder } from '@telegram-apps/telegram-ui'

export function NoPage() {
	return (
		<div className='container bg-[#141418] h-dvh flex align-middle items-center justify-center w-full'>
			<div className='flex flex-col items-center justify-center p-5'>
				<Image
					alt='Telegram sticker'
					src='https://xelene.me/telegram.gif'
					className='block p-2.5 bg-amber-200'
					style={{
						width: '256px',
						height: '256px',
					}}
				/>
				<Placeholder
					className='text-white text-3xl p-2.5 flex align-middle text-center pt-8'
					header='Нет данных'
					description='Попробуйте позже'
				></Placeholder>
			</div>
		</div>
	)
}
