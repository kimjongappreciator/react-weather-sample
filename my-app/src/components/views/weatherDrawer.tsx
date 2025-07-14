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


const drawerStyle = {
  clear: "mx-auto w-full max-w-lg bg-yellow-100 text-yellow-900",
  rainy: "mx-auto w-full max-w-lg bg-blue-200 text-blue-900",
  cloudy: "mx-auto w-full max-w-lg bg-gray-200 text-gray-1000",
  snowy: "mx-auto w-full max-w-lg bg-white text-gray-900",
  windy: "mx-auto w-full max-w-lg bg-green-100 text-green-800",
  stormy: "mx-auto w-full max-w-lg bg-gray-400 text-gray-700",
  foggy: "mx-auto w-full max-w-lg bg-gray-300 text-gray-900",  
};

function WeatherDrawer({ open, onOpenChange, place }: WeatherDrawerProps) {
  const weather = "rainy"; // o viene de la API
  const currentStyle = drawerStyle[weather] ?? "bg-white text-black ";
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
           Clima simulado: Soleado, 23°C, humedad 60%
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
