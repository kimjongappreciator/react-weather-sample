import type { Place } from "../../types/place";
import { Button } from "../ui/button";
import {
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  CloudLightning,
  Haze,
} from "lucide-react";
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
import { simulatedData } from "../../types/simulatedData";

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
  foggy: Haze,
};

const drawerStyle: Record<WeatherType, string> = {
  clear: "mx-auto w-full max-w-lg bg-yellow-100 text-yellow-900",
  rainy: "mx-auto w-full max-w-lg bg-blue-200 text-blue-900",
  cloudy: "mx-auto w-full max-w-lg bg-gray-200 text-gray-1000",
  snowy: "mx-auto w-full max-w-lg bg-blue-100 text-blue-900 border border-blue-300 shadow-inner",
  windy: "mx-auto w-full max-w-lg bg-green-100 text-green-800",
  stormy: "mx-auto w-full max-w-lg bg-gray-400 text-gray-700",
  foggy: "mx-auto w-full max-w-lg bg-gray-900 text-gray-200 border border-gray-800 shadow-[0_0_20px_#1f1f1f] backdrop-blur-sm",  
};

function getWeatherData(place: Place): Result {
  return (
    simulatedData[place.name] || {
      weather: "clear",
      temperature: 20,
      humidity: 50,
    }
  );
}

const translatedWeatherType: Record<string, string> = {
  clear: "despejado",
  rainy: "lluvioso",
  cloudy: "nublado",
  snowy: "nevado",
  windy: "ventoso",
  stormy: "tormentoso",
  foggy: "neblinoso",
};

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
          Clima simulado: {translatedWeatherType[weather]},{" "}
          {result?.temperature}°C, humedad {result?.humidity}%
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
