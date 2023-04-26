import Volk from "./Volk.js";
import Klasse from "./Klasse.js";

const routes = [
  { path: "charakter-erstellen/volk-auswählen", element: <Volk />, id: 1 },   { path: "charakter-erstellen/klasse-auswählen", element: <Klasse />, id: 2 },
];

export default routes;
