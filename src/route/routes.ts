export const ROUTES = {
	HOME: '/',
	GAME: `/game/:slug`,
	PROFILE: '/profile',
}

export const routerLinks = {
	home: () => ROUTES.HOME,
	game: (slug: string) => `/game/${slug}`,
  profile: () => ROUTES.PROFILE
}
