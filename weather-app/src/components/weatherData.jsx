import { useEffect, useState } from 'react'

export const WeatherData = ({ city, submit }) => {
	const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
	const API_KEY = 'ffe6804c8a87c4ef8e83eb850ea4fd5d'
	const diffKelvin = 273.15
	const [weatherData, setWeatherData] = useState(null)

	const fetchWeather = async() => {
		try {
			const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
			return response.json()
		} catch (error) {
			console.error('Error: '+error)
			return null
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchWeather()
				setWeatherData(response)
			} catch (error) {
				console.error('Error: '+error)
				setWeatherData(null)
			}
		}
		if (submit) fetchData()
	}, [submit])

	return (
		weatherData && weatherData.cod === 200 && (
			<section>
				<h2>{weatherData.city?.name}</h2>
				<h4>{parseInt(weatherData.main?.temp - diffKelvin)}ºC</h4>
				<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
				<p>{weatherData?.weather[0].description}</p>
			</section>
		)
	)
}
