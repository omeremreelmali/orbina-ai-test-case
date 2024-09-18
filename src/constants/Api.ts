import { CityName } from "./Cities";

export const HOST_API = "https://api.openweathermap.org";

const WeatherApi = {
  currentWeather: (long: number, lat: number, apiKey: string) =>
    `/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
  currentWeatherByCity: (city: CityName, apiKey: string) =>
    `/data/2.5/weather?q=${city}&appid=${apiKey}`,
  geo: (zip: string, apiKey: string) =>
    `/geo/1.0/zip?zip=${zip}&appid=${apiKey}`
};

export { WeatherApi };
