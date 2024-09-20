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
    <div className="flex ">
      <Box
        className={`w-2/12  py-10 border-r border-gray-300 h-[80vh] pr-4 overflow-y-scroll ${styles.leftSidebar}`}
      >
        <div className="space-y-1">
          {TURKEY_CITIES.map((city) => (
            <Button
              key={city.id}
              ref={selectedCity.id === city.id ? selectedCityRef : null}
              onClick={() => {
                dispatch(setSelectedCity(city));
              }}
              className={`w-full text-left hover:bg-gray-100 px-2 py-1 rounded-md ${
                selectedCity.id == city.id ? "bg-graybg" : ""
              }`}
            >
              {city.name}
            </Button>
          ))}
        </div>
      </Box>

      <div className="w-10/12  py-10 px-8 h-full bg-graybg h-[80vh] flex align-items-center justify-items-center">
        <Map />
      </div>
    </div>
  );
}
