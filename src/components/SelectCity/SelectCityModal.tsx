import { Box } from "@radix-ui/themes";
import React, { useEffect, useRef } from "react";
import Map from "../Map/Map";
import styles from "./styles/SelectCity.module.css";
import { TURKEY_CITIES } from "@/constants/Cities";
import { Button } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "@/redux/Slices/Weather";
import { RootState } from "@/redux/Store";

export default function SelectCityModal() {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.SelectedCity
  );
  const selectedCityRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCityRef.current) {
      selectedCityRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [selectedCity]);

  return (
    <section className="flex flex-col lg:flex-row">
      <aside
        className={`w-ful lg:w-2/12 py-10  lg:border-r border-gray-300 h-[80vh] pr-4 overflow-y-scroll ${styles.leftSidebar}`}
      >
        {TURKEY_CITIES.map((city, index) => (
          <Button
            key={index}
            ref={selectedCity.id === city.id ? selectedCityRef : null}
            onClick={() => {
              dispatch(setSelectedCity(city));
            }}
            className={`w-full text-left hover:bg-gray-100 px-2 py-1 rounded-md ${
              selectedCity.id == city.id ? "bg-graybg" : ""
            }`}
          >
            <p> {city.name}</p>
          </Button>
        ))}
      </aside>

      <main className="hidden lg:flex lg:w-10/12 py-10 px-8 bg-graybg h-[80vh] justify-center items-center">
        <Map />
      </main>
    </section>
  );
}
