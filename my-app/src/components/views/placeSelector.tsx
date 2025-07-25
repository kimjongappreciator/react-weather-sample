import type { Place } from "../../types/place";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type PlaceSelectorProps = {
  onChange?: (place: Place) => void;
  value?: string;
};

function PlaceSelector({ onChange, value }: PlaceSelectorProps) {
  const places: Place[] = [
    { id: "1", name: "Lima", lat: "-12.04318", long: "-77.02824"},
    { id: "2", name: "Huaraz", lat: "-9.52779", long: "-77.52778" },
    { id: "3", name: "Cuzco", lat: "-13.52264", long: "-71.96734" },
    { id: "4", name: "Narnia", lat: "89.99999", long: "135.00000" },
    { id: "5", name: "SillentHill", lat: "66.6", long: "-66.6" },
    { id: "6", name: "MiddleEarth", lat: "0.00000", long: "0.00000" },    
  ];

  return (
    <Select
      defaultValue={value}
      onValueChange={(id) => {
        const selected = places.find((p) => p.id === id);
        if (selected && onChange) {
          onChange(selected);
        }
      }}      
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecciona un lugar" />
      </SelectTrigger>
      <SelectContent className="bg-white shadow-g rounded-s-md border">
        <SelectGroup>
          {places.map((place) => (
            <SelectItem key={place.id} value={place.id} className="hover:bg-blue-100 focus:bg-blue-100 cursor-pointer">
              {place.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default PlaceSelector;
