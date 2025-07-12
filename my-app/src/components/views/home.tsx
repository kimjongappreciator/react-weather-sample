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

function Home() {
  const [selectedPlace, setSelectedPlace] = useState("");

  const handlePlaceChange = (value: string) => {
    setSelectedPlace(value);
    console.log("Lugar seleccionado:", value);
  };

  return (
    <>
      <div className="flex justify-center my-5">
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
                console.log("Buscando datos de:", selectedPlace);
              }}
            >
              Buscar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default Home;
