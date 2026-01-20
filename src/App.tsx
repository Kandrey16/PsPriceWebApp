import { useEffect } from 'react'
import { initTelegram } from './telegram'
import { Profile } from './pages/Profile'
import { Button, Placeholder } from '@telegram-apps/telegram-ui'

function App() {
	useEffect(() => {
		initTelegram()
	}, [])

	return (
		<div className='container p-10'>
			<Placeholder className='bg-amber-600 text-xl items-center' header='Title' description='Description'>
				<img
					alt='Telegram sticker'
					src='https://xelene.me/telegram.gif'
					style={{ display: 'block', width: '144px', height: '144px' }}
				/>
			</Placeholder>
		</div>
	)
}

export default App
