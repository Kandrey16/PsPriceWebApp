export const initTelegram = () => {
  if (!window.Telegram?.WebApp) {
    console.warn('Telegram WebApp not found')
    return
  }

  const tg = window.Telegram.WebApp

  tg.ready()
  tg.expand()

  console.log('Telegram initialized')
}