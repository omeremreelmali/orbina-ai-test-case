export const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(1);

export const formatTime = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
};
