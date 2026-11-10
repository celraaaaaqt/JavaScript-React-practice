import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const myElements = (
	<table>
		<tr>
			<th> Name </th>
		</tr>
		<tr>
			<td> Arcel </td>
		</tr>
		<tr>
			<td> Pogi </td>
		</tr>
	</table>
);

createRoot(document.getElementById("root")).render(myElements);
