import { useState } from "react"
import { WeatherData } from './components/WeatherData'

export const WeatherApp = () => {

	const [city, setCity] = useState('')
	const [submit, setSubmit] = useState(false)

	const handleCity = (e) => {
		setCity(e.target.value)
		if(submit) setSubmit(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(city.length > 0) setSubmit(true)
	}

	return (
		<>
			<header>
				<h1>Weather App</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={city}
						onChange={handleCity}
					/>
					<button type="submit">Search</button>
				</form>
			</header>
			<WeatherData
				city={city}
				submit={submit}
			/>
		</>
	)
}
