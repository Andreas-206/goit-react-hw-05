import { fetchMovie } from '../components/api'
import { useEffect, useState, useRef } from 'react'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'
import '../App.css'

const MovieDetails = () => {
	const location = useLocation()
	const ref = useRef(location.state?.from ?? '/')
	const [info, setInfo] = useState({})
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const { movieId } = useParams()
	const defImg =
		'https://pixabay.com/ru/photos/%D1%86%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%B2%D0%B5%D1%81%D0%BD%D0%B0-7933169/'
	const getMovie = async film => {
		setLoading(true)
		try {
			const data = await fetchMovie(film)
			setInfo(data)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		getMovie(movieId)
	}, [movieId])
	return (
		<div>
			<Link className='btn-back' to={ref.current}>
				Go back
			</Link>
			{error && <p>Error {error}</p>}
			{loading && <p>Loading...</p>}
			{Object.keys(info).length !== 0 && (
				<div>
					<div>
						<img
							src={
								info.poster_path
									? `https://image.tmdb.org/t/p/w500${info.poster_path}`
									: defImg
							}
							width={250}
							alt='poster'
						/>
						<div>
							<p className='css.movie-title'>
								{info.original_title} ({info.release_date.slice(0, 4)})
							</p>
							<p>User score: {Math.round(info.vote_average * 10)}%</p>
							<p className='overview'>Overview</p>
							<p>{info.overview}</p>
							<p className='genres'>Genres</p>
							<p>
								{info.genres.map(({ name, id }) => (
									<span className='span' key={id}>
										{name}
									</span>
								))}
							</p>
						</div>
					</div>
					<p className='additional-info'>Additional information</p>
					<ul>
						<li>
							<Link to='cast'>Cast</Link>
						</li>
						<li>
							<Link to='reviews'>Reviews</Link>
						</li>
					</ul>
					<Outlet />
				</div>
			)}
		</div>
	)
}

export default MovieDetails
