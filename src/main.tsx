import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { AppRoot } from '@telegram-apps/telegram-ui'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRoot>
			<App />
		</AppRoot>
	</StrictMode>
)
