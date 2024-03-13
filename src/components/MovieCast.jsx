import { fetchMovieCredits } from './api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieCast = () => {
	const { movieId } = useParams()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [actors, setActors] = useState([])

	const defImg =
		'https://pixabay.com/ru/photos/%D1%86%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%B2%D0%B5%D1%81%D0%BD%D0%B0-7933169/'

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setLoading(true)
	// 		try {
	// 			const data = await fetchMovieCredits(movieId)
	// 			setActors(data.actors)
	// 			console.log(setActors)
	// 		} catch (error) {
	// 			setError(error.message)
	// 		} finally {
	// 			setLoading(false)
	// 		}
	// 	}

	// 	fetchData()
	// }, [movieId, setActors])

	useEffect(() => {
		async function getMovie() {
			try {
				setLoading(true)
				const data = await fetchMovieCredits(movieId)
				setActors(data)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getMovie()
	}, [movieId])

	return (
		<div>
			{error && <p>Error!!!</p>}
			{loading && <p>Loading...</p>}
			{actors && actors.length > 0 && (
				<ul>
					{actors.map(({ cast_id, character, name, profile_path }) => (
						<li key={cast_id}>
							<img
								src={
									profile_path
										? `https://image.tmdb.org/t/p/w500${profile_path}`
										: defImg
								}
								width={300}
								alt={name}
							/>
							<p>{name}</p>
							<p>Character: {character}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default MovieCast
