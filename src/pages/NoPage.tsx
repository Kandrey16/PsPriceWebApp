import { Button, Image, Placeholder } from '@telegram-apps/telegram-ui'

export const NoPage = () => {
	return (
		<div className=' bg-[#141418] h-dvh flex align-middle items-center justify-center w-full'>
			<div className='flex flex-col items-center justify-center p-5'>
				<Image
					alt='Telegram sticker'
					src='https://xelene.me/telegram.gif'
					className='block w-36 h-36 p-2.5 bg-amber-200'
					style={{
						// display: 'block',
						width: '256px',
						height: '256px',
						// padding: '10px',
					}}
				/>
				<Placeholder
					className='text-white text-3xl p-2.5 flex align-middle text-center pt-8'
					header='Нет данных'
					description='Попробуйте позже'
				></Placeholder>
				<Button className='w-full my-3 bg-linear-to-r from-sky-500 to-indigo-500 rounded-xl p-2 text-white'>
					Перезапуск
				</Button>
			</div>
		</div>
	)
}
