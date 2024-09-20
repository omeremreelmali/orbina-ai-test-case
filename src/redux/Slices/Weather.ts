import { CityItem } from "@/constants/Cities";
import {
  IWeatherCurrentResponse,
  IWeatherWeeklyResponse
} from "@/types/weather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  SelectedCity: CityItem;
  WeatherCurrent: IWeatherCurrentResponse | null;
  WeeklyWeather: IWeatherWeeklyResponse | null;
}

const initialState: WeatherState = {
  SelectedCity: {
    id: "0",
    name: "",
    latitude: 0,
    longitude: 0
  },
  WeatherCurrent: null,
  WeeklyWeather: null
};

export const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<CityItem>) => {
      state.SelectedCity = action.payload;
    },
    setWeatherCurrent: (
      state,
      action: PayloadAction<IWeatherCurrentResponse>
    ) => {
      state.WeatherCurrent = action.payload;
    },
    setWeeklyWeather: (
      state,
      action: PayloadAction<IWeatherWeeklyResponse>
    ) => {
      state.WeeklyWeather = action.payload;
    }
  }
});

export const { setSelectedCity, setWeatherCurrent, setWeeklyWeather } =
  weatherSlice.actions;

export default weatherSlice.reducer;
