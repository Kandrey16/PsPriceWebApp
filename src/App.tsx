import { useEffect } from 'react'
import { initTelegram } from './telegram'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './route/AppRouter'

const client = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
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
