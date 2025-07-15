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

export const simulatedData: Record<string, Result> = {
  Huaraz: huarazMock,
  Lima: limaMock,
  Cuzco: cuzcoMock,
};
