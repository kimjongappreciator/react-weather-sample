import type { Place } from "../../types/place";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { useEffect, useState } from "react";
import type { Result } from "../../types/result";
import { weatherDescriptions } from "../../types/weatherDescriptions";
import { getWeatherIcon, getWeatherStyle } from "../../lib/styling-util";

type WeatherDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  place: Place | null;
};

async function fetchdata(lat: string, long: string) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: long,
    current:
      "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code",
    timezone: "auto",
  });

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?${params}`,
    );
    const data = await res.json();
    const current = data.current;
    return {
      weather: current.weather_code,
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

function WeatherDrawer({ open, onOpenChange, place }: WeatherDrawerProps) {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!place) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      const data = await fetchdata(place.lat, place.long);
      if (!data) {
        setError("Hubo un error al cargar los datos meteorologicos.");
        setLoading(false);
        return;
      }
      if (!cancelled) {
        setResult(data);
        setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [place]);

  const weather = result?.weather;
  const currentStyle = getWeatherStyle(weather);
  const CurrentIcon = getWeatherIcon(weather);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={currentStyle}  onCloseAutoFocus={(e) => e.preventDefault()}>
        <DrawerHeader>
          <DrawerTitle>Clima en {place?.name}</DrawerTitle>
          <DrawerDescription>
            Coordenadas: {place?.lat} {place?.long}
          </DrawerDescription>
        </DrawerHeader>
        <div>
          {loading ? (
            <p className="text-center p-4">Cargando clima...</p>
          ) : (
            <CurrentIcon className="mx-auto w-32 h-32" />
          )}{" "}
        </div>

        {error ? (
          <p className="text-center p-4 text-red-500">{error}</p>
        ) : (
          <div className="p-4 text-sm text-muted-foreground text-center">
            {`Clima: ${weatherDescriptions[result?.weather ?? 0]}, temperatura: ${result?.temperature}°C, humedad: ${result?.humidity}%`}
          </div>
        )}
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
