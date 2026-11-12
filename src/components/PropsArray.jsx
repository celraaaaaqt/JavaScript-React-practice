import { Button } from "./button";


export function PropsArray() {
	return (
		<div>
			<Names />
            <Button />
		</div>
	);
}
export function Names({ bandanaColor = "Black Bandana"}) {
	const name = ["Arcel", "Jeo", "Gehlee"];
	return (
		<div>
			<p>
				Most Handsome: {name[0]} with {bandanaColor} <br />
				Second Handsome: {name[1]} <br />
				Leading Woman: {name[2]}
			</p>
		</div>
	);
}
