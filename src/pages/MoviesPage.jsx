const handleSubmit = value => {
	setSearchParams({ query: value })
}

const { movieId } = useParams()
useEffect(() => {
	if (!movieId) return
}, [movieId])