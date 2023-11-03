import { useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { Hero } from "../Index"

const Navbar = () => {
  const [WeatherData, setWeatherData] = useState(null)
  const [City, setCity] = useState("kolkata")
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState(null)

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const getApi = async () => {
    try {
      setLoading(true)
      setError(null)
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${City}&appid=e451df6a773b660755a315a78ad42a6f`
      const response = await fetch(apiUrl)
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    } catch (error) {
      setError("Please enter valid city name")
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  if (Loading) {
    return (
      <div className="ml-[55px] mt-[40px] pb-28">
        <h1 className="text-4xl font-bold text-emerald-300">Loading.....</h1>
        <span className="ml-[15px] mt-10 flex h-[60px] w-[60px] animate-spin items-center justify-center rounded-full border border-x-[10px] border-y-[10px] border-x-emerald-300 border-y-emerald-700"></span>
      </div>
    )
  }

  if (Error) {
    return (
      <div className="font-dance text-3xl font-bold text-white">{Error}</div>
    )
  }

  return (
    <div>
      <div className="mt-5 flex items-center justify-between">
        <input
          value={City}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your city name . . ."
          className="rounded-xl px-4 py-4 font-dance text-lg shadow-lg outline-none"
        />
        <BsSearch
          onClick={getApi}
          className="cursor-pointer rounded-xl bg-white px-4 py-2 text-4xl text-gray-500"
          style={{ fontSize: 52 }}
        />
      </div>
      {!WeatherData ? (
        <div className="my-10 font-dance text-xl font-bold text-white ">
          {Error}
        </div>
      ) : (
        <Hero WeatherData={WeatherData} City={City} />
      )}
    </div>
  )
}
export default Navbar
