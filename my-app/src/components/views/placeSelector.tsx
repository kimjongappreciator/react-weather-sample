import { placesArray, type Place } from "../../types/place";
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
  const places: Place[] = placesArray;

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
