import { fetchMovieReview } from './api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

const MoviesReviews = () => {
	const { movieId } = useParams()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [review, setReview] = useState([])

	useEffect(() => {
		const fetchMovieReviews = async () => {
			setLoading(true)
			try {
				const info = await fetchMovieReview(movieId)
				setReview(info)
				console.log(info)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchMovieReviews()
	}, [movieId])

	return (
		<div>
			{error && <p>Error! {error}</p>}
			{loading && <p>Loading...</p>}
			{review.length > 0 ? (
				<ul>
					{review.map(({ id, author, content, created_up }) => (
						<li key={id}>
							<p className='author'>Author: {author}</p>
							<p>{content}</p>
							<p>{created_up}</p>
						</li>
					))}
				</ul>
			) : (
				<p>There is no description for this film</p>
			)}
		</div>
	)
}

export default MoviesReviews
