import { Button } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useMemo, useState } from "react";
import { Modal } from "../Modal/Modal";
import SelectCityModal from "./SelectCityModal";
import { Box } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import { weatherService } from "@/services/WeatherService";
import {
  setSelectedCity,
  setWeatherCurrent,
  setWeeklyWeather
} from "@/redux/Slices/Weather";
import { TURKEY_CITIES } from "@/constants/Cities";
import { useToast } from "../Toast/Toast";

export default function SelectCity() {
  const dispatch = useDispatch();
  const { open } = useToast();
  const [isOpenCitySelect, setIsOpenCitySelect] = useState(false);
  const selectedCity = useSelector(
    (state: RootState) => state.weather.SelectedCity
  );

  const getWeatherToday = async () => {
    const apiKey = sessionStorage.getItem("apiKey");
    const response = await weatherService.getWeatherByCity(
      selectedCity.name,
      apiKey || ""
    );

    if (response.success) {
      dispatch(setWeatherCurrent(response.data));
    } else {
      open({
        message: response.message,
        variant: "error",
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  const getWeatherWeekly = async () => {
    const apiKey = sessionStorage.getItem("apiKey");
    const response = await weatherService.getWeatherWeeklyByCity(
      selectedCity.name,
      apiKey || ""
    );
    console.log("responseGETWEATHERWEEKLY", response);
    if (response.success) {
      dispatch(setWeeklyWeather(response.data));
    } else {
      open({
        message: response.message,
        variant: "error",
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  useMemo(() => {
    if (selectedCity.longitude && selectedCity.latitude) {
      getWeatherToday();
      getWeatherWeekly();
    } else {
      const initialCity =
        TURKEY_CITIES.find((city) => city.id === "34") || TURKEY_CITIES[0];
      dispatch(setSelectedCity(initialCity));
    }
    setIsOpenCitySelect(false);
  }, [selectedCity]);

  return (
    <Box>
      <Button onClick={() => setIsOpenCitySelect(true)}>
        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <p>{selectedCity.name}</p>
        </div>
      </Button>
      <Modal
        isOpen={isOpenCitySelect}
        onClose={() => setIsOpenCitySelect(false)}
        title="Şehir Seç"
        width="80vw"
        height="90vh"
      >
        <SelectCityModal />
      </Modal>
    </Box>
  );
}
