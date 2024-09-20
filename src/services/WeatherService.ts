import { CityName } from "@/constants/Cities";
import { httpClient } from "./HttpClient";
import { WeatherApi } from "@/constants/Api";

class WeatherService {
  constructor() {}

  async getWeather(lon: number, lat: number, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.currentWeather(lon, lat, apiKeyValue)
    );
    return response;
  }

  async getWeatherByCity(city: CityName, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.currentWeatherByCity(city, apiKeyValue)
    );
    return response;
  }

  async getWeatherWeeklyByCity(city: CityName, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.weeklyWeatherByCity(city, apiKeyValue)
    );
    return response;
  }
  async getWeatherWeekly(lon: number, lat: number, apiKeyValue: string) {
    const response = await httpClient.get<any>(
      WeatherApi.weeklyWeather(lon, lat, apiKeyValue)
    );
    return response;
  }
}


export const weatherService = new WeatherService();
