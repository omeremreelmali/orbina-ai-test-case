import { formatTime, kelvinToCelsius } from "@/helpers/calculator";
import React from "react";
import {
  WiBarometer,
  WiCloudy,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiRain
} from "react-icons/wi";
import CustomCard from "../CustomCard/CustomCard";
import { IForecastItem, IWeatherCurrentResponse } from "@/types/weather";
import { weatherTranslations } from "@/constants/Weather";
import Image from "next/image";

export default function TodayCard({
  weatherCurrent,
  className
}: {
  weatherCurrent: IWeatherCurrentResponse | IForecastItem;
  className?: string;
}) {
  return (
    <CustomCard className={className}>
      <div className="p-6">
        {"name" in weatherCurrent && (
          <h2 className="text-2xl font-bold mb-4">{weatherCurrent.name}</h2>
        )}
        <div className="flex items-center mb-4">
          <Image
            src={`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@2x.png`}
            alt={weatherCurrent.weather[0].description}
            className=" mr-4"
            width={100}
            height={100}
          />
          <div>
            <p className="text-4xl font-bold">
              {kelvinToCelsius(weatherCurrent.main.temp)} <sup>°C</sup>
            </p>
            <p className="text-lg capitalize">
              {
                weatherTranslations[
                  weatherCurrent.weather[0].description.toLowerCase()
                ]
              }
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <WiThermometer className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Hissedilen</p>
              <p className="font-bold">
                {kelvinToCelsius(weatherCurrent.main.feels_like)} <sup>°C</sup>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <WiHumidity className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Nem</p>
              <p className="font-bold">{weatherCurrent.main.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center">
            <WiStrongWind className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Rüzgar Hızı</p>
              <p className="font-bold">{weatherCurrent.wind.speed} m/s</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center">
            <WiBarometer className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Basınç</p>
              <p className="font-bold">{weatherCurrent.main.pressure} hPa</p>
            </div>
          </div>
          <div className="flex items-center">
            <WiCloudy className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Bulut Oranı</p>
              <p className="font-bold">{weatherCurrent.clouds.all}%</p>
            </div>
          </div>
          {weatherCurrent.sys && "sunrise" in weatherCurrent.sys && (
            <div className="flex items-center">
              <WiSunrise className="text-2xl mr-2" />
              <div>
                <p className="text-sm">Gün Doğumu</p>
                <p className="font-bold">
                  {formatTime(weatherCurrent.sys.sunrise)}
                </p>
              </div>
            </div>
          )}
          {weatherCurrent.sys && "sunset" in weatherCurrent.sys && (
            <div className="flex items-center">
              <WiSunset className="text-2xl mr-2" />
              <div>
                <p className="text-sm">Gün Batımı</p>
                <p className="font-bold">
                  {formatTime(weatherCurrent.sys.sunset)}
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center">
            <WiThermometer className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Min/Maks Sıcaklık</p>
              <p className="font-bold">
                {kelvinToCelsius(weatherCurrent.main.temp_min)} <sup>°C</sup> /
                {kelvinToCelsius(weatherCurrent.main.temp_max)} <sup>°C</sup>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <WiStrongWind className="text-2xl mr-2" />
            <div>
              <p className="text-sm">Rüzgar Yönü</p>
              <p className="font-bold">{weatherCurrent.wind.deg}°</p>
            </div>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
