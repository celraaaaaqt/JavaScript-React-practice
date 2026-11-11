import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Car } from "./components/car.jsx";
import { Button } from "./components/button.jsx";

createRoot(document.getElementById("root")).render(
	createElement(
		Car,
		Button
	),
);
 