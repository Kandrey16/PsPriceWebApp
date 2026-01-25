import { useEffect } from 'react'
import { initTelegram } from './telegram'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './route/AppRouter'

const API_URL = import.meta.env.VITE_APP_API_URL

const client = new ApolloClient({
	link: new HttpLink({ uri: `${API_URL}/graphql` }),
	cache: new InMemoryCache(),
})

function App() {
	useEffect(() => {
		initTelegram()
	}, [])

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<AppRouter />
			</ApolloProvider>
		</BrowserRouter>
	)
}

export default App
