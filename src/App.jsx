import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import './App.css'

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const MovieCast = lazy(() => import("./components/MovieCast.jsx"));
const MovieReviews = lazy(() => import("./components/MoviesReviews.jsx"));

const App = () => {
  return (
		<>
			<Navigation />

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/movies/:movieId' element={<MoviesDetailsPage />}>
						<Route path='/movies/:movieId/cast' element={<MovieCast />} />
						<Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
