import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { kelvinToCelsius } from "@/helpers/calculator";
import { IForecastItem } from "@/types/weather";
import { weatherTranslations } from "@/constants/Weather";
import Image from "next/image";

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
      className={`w-[200px] lg:w-1/5 p-2 border-1 rounded-md cursor-pointer hover:bg-gray-100 ${
        selected ? "bg-graybg border-neutral-950" : "bg-white border-gray-200"
      }`}
      onClick={() => onClick(forecast)}
    >
      <div
        className={`w-[200px] lg:w-full flex flex-col items-center justify-center  `}
      >
        <h3 className={` text-gray-500 font-bold text-lg`}>
          {new Date(forecast.dt * 1000).toLocaleDateString("tr-TR", {
            weekday: "long"
          })}
        </h3>
        <Image
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].description}
          width={100}
          height={100}
        />
        <p>
          {weatherTranslations[forecast.weather[0].description.toLowerCase()]}
        </p>
        <p>
          Sıcaklık: {kelvinToCelsius(forecast.main.temp)} <sup>°C</sup>
        </p>

        <p>
          Hissedilen: {kelvinToCelsius(forecast.main.feels_like)} <sup>°C</sup>
        </p>
      </div>
    </div>
  );
}
