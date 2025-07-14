import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import PlaceSelector from "./placeSelector";
import type { Place } from "../../types/place";
import WeatherDrawer from "./weatherDrawer";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [drawerOpen, setdrawerOpen] = useState(false);

  const handlePlaceChange = (value: Place) => {
    setSelectedPlace(value);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Consulta meteorologica</CardTitle>
            <CardDescription>
              Selecciona un lugar para revisar los detalles meteorologicos
            </CardDescription>
            <CardAction>
              <Button variant="link">?</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <PlaceSelector onChange={handlePlaceChange} />
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={() => {
                if (selectedPlace) {
                  setdrawerOpen(true);
                } else {
                  toast.error("Por favor, selecciona un lugar primero.", {
                    description:
                      "No se puede mostrar el clima sin un lugar seleccionado.",
                    action: {
                      label: "Entendido",
                      onClick: () => toast.dismiss(),
                    },
                  });
                }
              }}
            >
              Buscar
            </Button>
          </CardFooter>
        </Card>
      </div>

      <WeatherDrawer
        open={drawerOpen}
        onOpenChange={setdrawerOpen}
        place={selectedPlace}
      ></WeatherDrawer>
      <Toaster richColors position="top-center" theme="light"/>
    </>
  );
}
export default Home;
