import { useEffect, useState } from 'react'
import { fetchMovies } from '../components/api'
import Loader from '../components/Loader/Loader'
import MoviesList from '../components/MoviesList/MoviesList'
import '../App.css'

export default function HomePage() {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function getData() {
			try {
				setLoading(true)
				const data = await fetchMovies()
				setMovies(data)
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
			<h1 className='title'>Trending today</h1>
			{loading && <Loader />}
			{error && <p>Error, movie not found!!!</p>}
			<div className='container'>
				<MoviesList movies={movies} />
			</div>
		</>
	)
}
