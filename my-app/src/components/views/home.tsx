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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { CircleDollarSign } from "lucide-react";

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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="animate-pulse">?</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black text-white">
                  <div className="flex justify-between gap-4">
                    <CircleDollarSign className="w-60  text-white" />            
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@kimjongappreciator</h4>
                      <p className="text-sm">
                        No uso datos en tiempo real por que no quiero que me venga una factura sorpresa a fin de mes por el uso de un api si un bot intenta hacer scrapping.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        {":^)"} Gracias por tu comprension.
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>              
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
      <Toaster richColors position="top-center" theme="light" />
    </>
  );
}
export default Home;
