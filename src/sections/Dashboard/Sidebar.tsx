"use client";

import { Modal } from "@/components/Modal/Modal";
import SelectCity from "@/components/SelectCity";
import { weatherTranslations } from "@/constants/Weather";
import { kelvinToCelsius } from "@/helpers/calculator";
import { turkishToEnglish } from "@/helpers/textHelpers";
import { RootState } from "@/redux/Store";
import { Box } from "@radix-ui/themes";
import Image from "next/image";

import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SidebarDashboard() {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.SelectedCity
  );
  const weatherCurrent = useSelector(
    (state: RootState) => state.weather.WeatherCurrent
  );
  const todayDay = new Date().toLocaleDateString("tr-TR", {
    weekday: "long"
  });

  return (
    <Box className="h-full relative">
      <SelectCity />

      {weatherCurrent && (
        <div
          className="flex flex-col 
         mt-8"
        >
          <div>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@4x.png`}
              alt={weatherCurrent.weather[0].description}
              width={200}
              height={200}
            />
            <div className="mx-5 pb-10 border-b-2 border-gray-200">
              <p className="text-5xl font-bold">
                {kelvinToCelsius(weatherCurrent.main.temp)}
                <sup>°C</sup>
              </p>
              <p className="text-2xl font-bold mt-2">{todayDay}</p>
            </div>

            <div className="mx-2 mt-10 flex flex-row items-center gap-2 pb-10">
              <Image
                src={`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@4x.png`}
                alt={weatherCurrent.weather[0].description}
                width={50}
                height={50}
              />
              <p className="text-lg capitalize font-bold">
                {
                  weatherTranslations[
                    weatherCurrent.weather[0].description.toLowerCase()
                  ]
                }
              </p>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Image
              src={`/images/${turkishToEnglish(selectedCity.name)}.jpg`}
              alt={selectedCity.name}
              className="rounded-lg w-full object-cover"
              width={300}
              height={200}
            />
          </div>
        </div>
      )}
    </Box>
  );
}
