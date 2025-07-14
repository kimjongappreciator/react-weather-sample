import type { Place } from "../../types/place";
import { Button } from "../ui/button";
import { Cloud, Sun, CloudRain, Snowflake, Wind, CloudLightning, Haze } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import type React from "react";
import { useEffect, useState } from "react";
import type { Result } from "../../types/result";
import type { WeatherType } from "../../types/weatherType";

type WeatherDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  place: Place | null;
};

const iconMap: Record<string, React.ElementType> = {
  clear: Sun,
  rainy: CloudRain,
  cloudy: Cloud,
  snowy: Snowflake,
  windy: Wind,
  stormy: CloudLightning,
  foggy: Haze 
};


const drawerStyle: Record<WeatherType,string> = {
  clear: "mx-auto w-full max-w-lg bg-yellow-100 text-yellow-900",
  rainy: "mx-auto w-full max-w-lg bg-blue-200 text-blue-900",
  cloudy: "mx-auto w-full max-w-lg bg-gray-200 text-gray-1000",
  snowy: "mx-auto w-full max-w-lg bg-white text-gray-900",
  windy: "mx-auto w-full max-w-lg bg-green-100 text-green-800",
  stormy: "mx-auto w-full max-w-lg bg-gray-400 text-gray-700",
  foggy: "mx-auto w-full max-w-lg bg-gray-300 text-gray-900",  
};

function getWeatherData(place: Place) : Result {

  if(place.name === "Huaraz") {
    return {
      weather: "stormy",
      temperature: 10,
      humidity: 70,
    };
  }

  const weatherData: Result = {
    weather: "clear", // Simulated data, replace with actual API call
    temperature: 23, 
    humidity: 60,
  };
  return weatherData
}

function WeatherDrawer({ open, onOpenChange, place }: WeatherDrawerProps) {
   const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (place) {
      const data = getWeatherData(place);
      setResult(data);
    }
  }, [place]);

  const weather = result?.weather || "clear"; // usa el valor del resultado
  const currentStyle = drawerStyle[weather] ?? "bg-white text-black";  
  const CurrentIcon = iconMap[weather] || Sun;

  
  

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={currentStyle}>
        <DrawerHeader>
          <DrawerTitle>Clima en {place?.name}</DrawerTitle>
          <DrawerDescription>
            Coordenadas: {place?.lat} {place?.long}
          </DrawerDescription>
        </DrawerHeader>
        <div>
          <CurrentIcon className="mx-auto w-32 h-32" />
        </div>

        <div className="p-4 text-sm text-muted-foreground text-center">
           Clima simulado: {result?.weather}, {result?.temperature}°C, humedad {result?.humidity}%
        </div>

        <div className="p-4">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cerrar
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
export default WeatherDrawer;
