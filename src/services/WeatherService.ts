import { CityName } from "@/constants/Cities";
import { httpClient } from "./HttpClient";
import { WeatherApi } from "@/constants/Api";

class WeatherService {
  constructor() {}

  async getWeather(lat: number, lon: number, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.currentWeather(lat, lon, apiKeyValue)
    );
    return response;
  }

  async getWeatherByCity(city: CityName, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.currentWeatherByCity(city, apiKeyValue)
    );
    return response;
  }
}

export const weatherService = new WeatherService();
