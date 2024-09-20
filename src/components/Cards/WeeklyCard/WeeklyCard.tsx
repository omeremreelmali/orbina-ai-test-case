import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { kelvinToCelsius } from "@/helpers/calculator";
import { IForecastItem } from "@/types/weather";
import { weatherTranslations } from "@/constants/Weather";

export default function WeeklyCard({
  forecast,
  onClick,
  selected
}: {
  forecast: IForecastItem;
  onClick: (forecast: IForecastItem) => void;
  selected: boolean;
}) {
  return (
    <div
      className={`w-1/6  p-2 border-1  rounded-md cursor-pointer hover:bg-gray-100 ${
        selected ? "bg-graybg border-neutral-950" : "bg-white border-gray-200"
      }`}
      onClick={() => onClick(forecast)}
    >
      <div className={`flex flex-col items-center justify-center  `}>
        <h3 className={` text-gray-500 font-bold text-lg`}>
          {new Date(forecast.dt * 1000).toLocaleDateString("tr-TR", {
            weekday: "long"
          })}
        </h3>
        <img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].description}
        />
        <p>
          {weatherTranslations[forecast.weather[0].description.toLowerCase()]}
        </p>
        <p>Sıcaklık: {kelvinToCelsius(forecast.main.temp)}°C</p>

        <p>Hissedilen: {kelvinToCelsius(forecast.main.feels_like)}°C</p>
      </div>
    </div>
  );
}
