import type { Place } from "../../types/Place";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

type WeatherDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  place: Place | null;
};

const drawerStyle = {
    clear: "mx-auto w-full max-w-lg bg-yellow-100 text-yellow-800",
    rainy: "mx-auto w-full max-w-lg bg-blue-200 text-blue-900",
    cloudy: "mx-auto w-full max-w-lg bg-gray-200 text-gray-800",
  };

function WeatherDrawer({ open, onOpenChange, place }: WeatherDrawerProps) {
  const weather = "rainy"; // o viene de la API
  

  const currentStyle = drawerStyle[weather] ?? "bg-white text-black ";

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={currentStyle}>
        <DrawerHeader>
          <DrawerTitle>Clima en {place?.name}</DrawerTitle>
          <DrawerDescription>
            Coordenadas: {place?.lat} {place?.long}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">          
          🌤️ Clima simulado: Soleado, 23°C, humedad 60%
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
