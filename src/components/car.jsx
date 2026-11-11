import { Button } from "./button";
import { Ternary } from "./Ternary";
export function Car() {
	const infos = {
		name: "Honda",
		model: "civic",
		price: 100000,
	};

	const power = {
		power: 100 * carPower(10),
		hp: carHp(50),
	};

	return (
		<div>
			<h1>
				Car Name: {infos.name}, Model: {infos.model}, Price: {infos.price}
			</h1>
			<p> It has a power of: {power.power}%. </p>
			<p> It has a hp of: {power.hp}%. </p>
			<Button />
			<Ternary />
		</div>
	);
}

function carPower(p) {
	const power = 10 * p;
	return power;
}

function carHp(hp) {
	const health = 100 + hp;
	return health;
}
