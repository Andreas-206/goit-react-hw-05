import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchMoviesBySearch } from '../components/api'
import SearchInput from '../components/SearchInput/SearchInput'
import MoviesList from '../components/MoviesList/MoviesList'

const Movies = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [searchParams, setSearchParams] = useSearchParams('')

	const onSearch = query => {
		setSearchParams({ search: query })
	}

	useEffect(() => {
		const query = searchParams.get('search')
		if (!query) return
		const searchMovie = async () => {
			setLoading(true)
			try {
				const data = await fetchMoviesBySearch(query)
				setMovies(data.results)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		searchMovie()
	}, [searchParams])

	return (
		<div>
			<SearchInput onSearch={onSearch} />
			{error && <p>Error {error}</p>}
			{loading && <p>Loading...</p>}
			<MoviesList movies={movies} />
		</div>
	)
}

export default Movies
