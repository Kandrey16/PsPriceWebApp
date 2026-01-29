import { tg } from '../telegram'

export function useTelegramTheme() {
	const params = tg?.colorScheme

	console.log(params)
	return params
}
