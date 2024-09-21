import CustomCard from "@/components/Cards/CustomCard/CustomCard";
import { RootState } from "@/redux/Store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IForecastItem, IWeatherWeeklyResponse } from "@/types/weather";
import { kelvinToCelsius } from "@/helpers/calculator";
import WeeklyCard from "@/components/Cards/WeeklyCard/WeeklyCard";
import TodayCard from "@/components/Cards/TodayCard/TodayCard";

export default function WeeklyWeather() {
  const weeklyWeather: IWeatherWeeklyResponse | null = useSelector(
    (state: RootState) => state.weather.WeeklyWeather
  );
  const [dailyForecasts, setDailyForecasts] = useState<IForecastItem[]>([]);

  const [selectedForecast, setSelectedForecast] =
    useState<IForecastItem | null>();

  useEffect(() => {
    if (weeklyWeather) {
      const dailyForecastsValue = weeklyWeather.list.filter(
        (_, index) => index % 8 === 0
      );
      setDailyForecasts(dailyForecastsValue);
      setSelectedForecast(dailyForecastsValue[0]);
    }
  }, [weeklyWeather]);

  return (
    <>
      <CustomCard>
        <h2>{weeklyWeather?.city.name} için 5 Günlük Hava Durumu</h2>
      </CustomCard>
      <div className="flex flex-col mt-5 pr-20">
        <div className="flex gap-4  mt-5">
          {dailyForecasts.map((forecast, index) => (
            <WeeklyCard
              selected={selectedForecast?.dt == forecast.dt}
              forecast={forecast}
              key={forecast.dt}
              onClick={(value) => {
                setSelectedForecast(value);
                console.log(value);
              }}
            />
          ))}
        </div>
        <div className="mt-5 w-full">
          {selectedForecast && (
            <TodayCard weatherCurrent={selectedForecast} className="w-full" />
          )}
        </div>
      </div>
    </>
  );
}
