const Hero = ({ WeatherData, City }) => {
  return (
    <>
      {WeatherData && (
        <div className="">
          <div className="justify-cente mt-14 flex flex-col items-center">
            <img
              src={`src/assets/${WeatherData.weather[0].description}.png`}
              alt="weather_icon"
              className="h-36 text-9xl"
            />
            <div className="mt-10 flex gap-4 font-dance text-3xl font-bold text-white">
              <span>{WeatherData.main.temp}&deg;c</span>
              <span className="rounded-lg border-2"></span>
              <span className="capitalize">
                {WeatherData.weather[0].description}
              </span>
            </div>
            <div className="mt-5 flex font-dance text-xl capitalize text-white">
              <p className="mr-1 font-bold capitalize underline">City </p>
              <p>: {City}</p>
              <span className="mx-4 rounded-lg border-2"></span>
              <span className="mr-1 font-bold capitalize underline">
                Country
              </span>
              <p>: {WeatherData.sys.country}</p>
            </div>
          </div>
          <div className="mt-10 flex justify-between pb-7">
            <div className="mt-5 flex items-center font-dance text-white">
              <span>
                <img
                  src="src/assets/humidity.png"
                  alt="humidity"
                  className="h-16"
                />
              </span>
              <span className="">
                <h1 className="text-3xl">{WeatherData.main.humidity}%</h1>
                <p className="text-md mt-1">Humidity</p>
              </span>
            </div>

            <div className="mt-5 flex items-center font-dance text-white">
              <span>
                <img
                  src="src/assets/wind-farm.png"
                  alt="Wind speed"
                  className="h-16"
                />
              </span>
              <span className="ml-1">
                <h1 className="text-3xl">{WeatherData.wind.speed}km/h</h1>
                <p className="text-md">Wind Speed</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Hero
