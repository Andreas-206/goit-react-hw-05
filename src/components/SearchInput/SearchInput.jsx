const SearchInput = ({ onSearch }) => {
	const handleSubmit = e => {
		e.preventDefault()
		const input = e.currentTarget
		onSearch(input.elements.text.value)
		input.reset()
	}

	return (
		<form action='' onSubmit={handleSubmit}>
			<input type='text' name='text' />
			<button>Search</button>
		</form>
	)
}

export default SearchInput
