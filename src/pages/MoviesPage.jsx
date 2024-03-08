import { Suspense, useEffect, useParams } from 'react';

export default function MoviesPage() {
	const handleSubmit = value => {
	setSearchParams({ query: value })
}

const { movieId } = useParams()
useEffect(() => {
	if (!movieId) return
}, [movieId]);
	
	return (
		<Suspense />
	);
}
