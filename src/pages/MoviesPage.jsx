import { Suspense } from 'react';

export default MoviesPage() {
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
