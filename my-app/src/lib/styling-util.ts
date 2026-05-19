import {
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  CloudLightning,
  Haze,
  Frown,
} from "lucide-react";

export function getWeatherIcon(code: number | undefined): React.ElementType {
  if (code === undefined) return Frown; // fallback
  if (code === 0 || code <= 2) return Sun;
  if (code === 3) return Cloud;
  if ([45, 48].includes(code)) return Haze;
  if (code >= 51 && code <= 65) return CloudRain;
  if (code >= 71 && code <= 77) return Snowflake;
  if (code >= 80 && code <= 86) return CloudRain;
  if (code >= 95) return CloudLightning;
  return Sun;
}

export function getWeatherStyle(code: number | undefined): string {
  const base = "mx-auto w-full max-w-lg";

  if (code === undefined) return `${base} bg-white text-black`; // fallback

  if (code === 0)
    // Despejado
    return `${base} bg-yellow-100 text-yellow-900`;

  if (code <= 2)
    // Mayormente/parcialmente despejado
    return `${base} bg-amber-50 text-amber-800`;

  if (code === 3)
    // Nublado
    return `${base} bg-gray-200 text-gray-800`;

  if ([45, 48].includes(code))
    // Neblina
    return `${base} bg-[#111111] text-[#cccccc] border border-[#2a2a2a] font-mono`;

  if ([51, 53, 55].includes(code))
    // Llovizna
    return `${base} bg-blue-100 text-blue-900`;

  if ([61, 63, 65].includes(code))
    // Lluvia
    return `${base} bg-blue-300 text-blue-950`;

  if ([71, 73, 75, 77].includes(code))
    // Nieve/granizo
    return `${base} bg-slate-100 text-slate-800 border border-slate-300`;

  if ([80, 81, 82].includes(code))
    // Chubascos
    return `${base} bg-teal-100 text-teal-900`;

  if ([85, 86].includes(code))
    // Chubascos de nieve
    return `${base} bg-indigo-100 text-indigo-900`;

  if ([95, 96, 99].includes(code))
    // Tormenta
    return `${base} bg-gray-700 text-gray-100`;

  return `${base} bg-white text-black`;
}
