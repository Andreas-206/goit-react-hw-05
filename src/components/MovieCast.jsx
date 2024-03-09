import { useParams, useEffect } from "react-router-dom"
import React from 'react'

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



