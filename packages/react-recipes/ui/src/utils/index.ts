import { Temperature, TemperatureScale } from "../types";

export const getTemperatureString = (
  temperature: Temperature,
  desired_scale: TemperatureScale
) => {
  switch (desired_scale) {
    case TemperatureScale.Celsius:
      return temperature.degrees_celsius.toString().concat("°C");
    case TemperatureScale.Fahrenheit:
      return ((temperature.degrees_celsius * 9) / 5 + 32)
        .toString()
        .concat("°F");
    case TemperatureScale.Kelvin:
      return (temperature.degrees_celsius + 273.15).toString().concat("K");
  }
};
