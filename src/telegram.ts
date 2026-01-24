export const tg = window?.Telegram?.WebApp

export const initTelegram = () => {
	if (!tg) {
		console.warn('Telegram WebApp not found')
		return
	}

	tg.ready()
	tg.expand()

	console.log('Telegram initialized')
}

export const getStartParam = (): string | undefined => {
	return tg?.initDataUnsafe?.start_param
}
