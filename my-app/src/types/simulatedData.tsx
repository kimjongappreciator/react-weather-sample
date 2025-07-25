import type { Result } from "./result";

const huarazMock: Result = {
  weather: "stormy",
  temperature: 10,
  humidity: 70,
};

const limaMock: Result = {
  weather: "cloudy",
  temperature: 13,
  humidity: 70,
};

const cuzcoMock: Result = {
  weather: "clear",
  temperature: 19,
  humidity: 70,
};

const narniaMock: Result = {
  weather: "snowy",
  temperature: -5,
  humidity: 80
};

const middleEarthMock: Result = {
  weather: "windy",
  temperature: 5,
  humidity: 90,
};

const sillentHillMock: Result = {
  weather: "foggy",
  temperature: 7,
  humidity: 95,
};


export const simulatedData: Record<string, Result> = {
  Huaraz: huarazMock,
  Lima: limaMock,
  Cuzco: cuzcoMock,
  Narnia: narniaMock,
  SillentHill: sillentHillMock,
  MiddleEarth: middleEarthMock,
};
