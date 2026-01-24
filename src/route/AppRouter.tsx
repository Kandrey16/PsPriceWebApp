import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { tg } from '../telegram'
import { ROUTES } from './routes'
import { CatalogPage } from '../pages/CatalogPage'
import { GamePage } from '../pages/GamePage'
import { Profile } from '../pages/Profile'

export const TelegramBackButton = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (!tg || !tg.BackButton) return

		const handleBack = () => {
			navigate(-1)
		}

		if (location.pathname !== ROUTES.HOME) {
			tg.BackButton.show()
      tg.BackButton.onClick(handleBack)
		} else {
			tg.BackButton.hide()
		}


		return () => {
			tg?.BackButton.offClick(handleBack)
		}
	}, [location.pathname, navigate])

	return null
}

export const AppRouter = () => {
	return (
		<>
			<TelegramBackButton />
			<Routes>
				<Route path={ROUTES.HOME} element={<CatalogPage />} />
				<Route path={ROUTES.GAME} element={<GamePage />} />
				<Route path={ROUTES.PROFILE} element={<Profile />} />
			</Routes>
		</>
	)
}
