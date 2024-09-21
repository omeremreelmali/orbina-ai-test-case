"use client";
import React from "react";
import styles from "./styles/Map.module.css";
import { MapCities } from "@/constants/Map";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import { CityItem, TURKEY_CITIES } from "@/constants/Cities";
import { setSelectedCity } from "@/redux/Slices/Weather";
interface CityProps {
  id: string;
  cityName: string;
  d: string;
}

const City = (
  city: CityProps,
  selectedCity: CityItem,
  callBack: (city: CityItem) => void
) => {
  const { id, cityName, d } = city;
  const selectedCityID = selectedCity ? "TR-" + selectedCity.id : null;

  const isSelected = selectedCityID == id;
  return (
    <path
      id={id}
      onClick={() => {
        const thisCityId = id.split("-")[1];
        const city = TURKEY_CITIES.find(
          (city) => city.id.toLowerCase() == thisCityId
        );
        if (city) {
          callBack(city);
        }
      }}
      fill={isSelected ? "red" : "#CCCCCC"}
      data-city-name={cityName.toLowerCase()}
      // title={cityName}
      className={styles.city}
      d={d}
    />
  );
};

const Map: React.FC = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.SelectedCity
  );
  const dispatch = useDispatch();

  const onSelectCity = (city: CityItem) => {
    dispatch(setSelectedCity(city));
  };
  return (
    <svg id="svg-turkey-map" version="1.1" viewBox="0 0 800 350">
      <g>{MapCities.map((city) => City(city, selectedCity, onSelectCity))}</g>
    </svg>
  );
};

export default Map;
