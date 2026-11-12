import { createRoot } from "react-dom/client";
import "./index.css";
import { Car } from "./components/car.jsx";
import { Button } from "./components/button.jsx";
import { ParentComponent } from "./components/CinC.jsx";
import { PropsArray } from "./components/PropsArray.jsx";
import { Parent } from "./components/PropsChildren.jsx";
import { Football } from "./components/Events.jsx";
import { Goal, Goal2 } from "./components/conditionals.jsx";
import { Vehicle } from "./components/operators.jsx";
import { MyCars } from "./components/ReactLists.jsx";

createRoot(document.getElementById("root")).render(
	<div>
		<Car />
		<Button />
		<ParentComponent />
        <PropsArray />
        <Parent />
        <Football />
        <Goal isGoal={true} />
        <Goal2 isGoal={true} />
        <Vehicle brand="Tesla"/>
        <MyCars />
	</div>,
);
