import { useEffect, useState } from 'react'
import { fetchMovies } from '../components/api'

export default function HomePage() {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function getData() {
			try {
				setLoading(true)
				const data = await fetchMovies()
				setMovies(data.results)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [])

	return (
		<>
			<h1>Trending today</h1>
			{loading && <Loader />}
			<div></div>
		</>
	)
}
