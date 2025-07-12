import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Select } from "../ui/select";

type PlaceSelectorProps = {
    onChange?: (value: string) => void;
    value?: string;
  };

function PlaceSelector( { onChange, value }: PlaceSelectorProps) {
    console.log("PlaceSelector renderizado con value:", value);
  const places = [
    { id: "1", name: "Lima" },
    { id: "2", name: "Huaraz" },
    { id: "3", name: "Cuzco" },
  ];

  

  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a place" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {places.map((place) => (
            <SelectItem key={place.id} value={place.id}>
              {place.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default PlaceSelector;
