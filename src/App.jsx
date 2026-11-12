import { createRoot } from "react-dom/client";
import "./index.css";
import { Car } from "./components/car.jsx";
import { Button } from "./components/button.jsx";
import { ParentComponent } from "./components/CinC.jsx";
import { PropsArray } from "./components/PropsArray.jsx";

createRoot(document.getElementById("root")).render(
	<div>
		<Car />
		<Button />
		<ParentComponent />
        <PropsArray />
	</div>,
);
