import type { WeatherType } from "./weatherType";

export type Result = {
  weather: WeatherType;
  temperature: number;
  humidity: number;
};
