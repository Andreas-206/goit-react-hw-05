import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const options = {
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzNiMzQ1YTQ2NDk3MDFmNmE1OWMwOGUzYmI1ZDg0MyIsInN1YiI6IjY1ZWIxYWUxN2Y0ZjIxMDE3YmRlMDE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.snRIexDM-X47F19MFalBoGhIrtUry-B6hIKZwh4O-t0',
	},
}

export async function fetchMovies() {
	const { data } = await axios.get('/trending/movie/day', options)
	return data.results
}

export async function fetchMovie(id) {
	const { data } = await axios.get(`/movie/${id}?language=en-US`, options)
	return data
}

export async function fetchMovieCredits(id) {
	const { data } = await axios.get(
		`/movie/${id}?language=en-US/credits`,
		options
	)
	return data.cast
}

export async function fetchMovieReview(id) {
	const { data: reviewData } = await axios.get(
		`/movie/${id}/reviews?language=en-US&page=1`,
		options
	)
	return reviewData.results
}

export async function fetchMoviesBySearch(search) {
	const { data } = await axios.get(
		`/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
		options
	)
	return data.results
}
