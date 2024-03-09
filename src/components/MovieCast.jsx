import { useParams } from "react-router-dom"
import React, { useEffect } from 'react'

function MovieCast() {
	const { movieId } = useParams()
	useEffect(() => {
		if (!movieId) return
	}, [movieId]);

	return (
		<div>
			
		</div>
	)
}

export default MovieCast



