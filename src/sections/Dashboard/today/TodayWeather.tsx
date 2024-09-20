import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import TodayCard from "@/components/Cards/TodayCard/TodayCard";
export default function TodayWeather() {
  const weatherCurrent = useSelector(
    (state: RootState) => state.weather.WeatherCurrent
  );
  return weatherCurrent ? <TodayCard weatherCurrent={weatherCurrent} /> : null;
}
