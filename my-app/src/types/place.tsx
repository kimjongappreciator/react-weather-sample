export type Place = {
  id: string;
  name: string;
  lat: string;
  long: string;
};

export const placesArray: Place[] = [
  { id: "1", name: "Lima", lat: "-12.04318", long: "-77.02824" },
  { id: "2", name: "Tombuctú", lat: "16.77360", long: "-3.00742" }, // Mali
  { id: "3", name: "Katmandú", lat: "27.70169", long: "85.31420" }, // Nepal
  { id: "4", name: "Uagadugú", lat: "12.36566", long: "-1.53388" }, // Burkina Faso
  { id: "5", name: "Ushuaia", lat: "-54.80190", long: "-68.30295" }, // Fin del mundo
  { id: "6", name: "Yakutsk", lat: "62.03389", long: "129.73306" }, // Ciudad más fría
  { id: "7", name: "Djibouti", lat: "11.58901", long: "43.14503" }, // Uno de los más calurosos
  { id: "8", name: "Antananarivo", lat: "-18.91368", long: "47.53613" }, // Madagascar
  { id: "9", name: "Isla de Pascua", lat: "-27.11220", long: "-109.34960" }, // Chile
  { id: "10", name: "Chernobyl", lat: "51.27204", long: "30.22350" }, // Ucrania
  { id: "11", name: "Machu Picchu", lat: "-13.16317", long: "-72.54536" }, // Perú
  { id: "12", name: "Pompeya", lat: "40.74963", long: "14.50142" }, // Italia
  { id: "13", name: "Angkor Wat", lat: "13.41240", long: "103.86673" }, // Camboya
  { id: "14", name: "Tíbet (Lhasa)", lat: "29.65270", long: "91.17229" }, // China
  { id: "15", name: "Oymyakon", lat: "63.46120", long: "142.78570" }, // El pueblo más frío
];
