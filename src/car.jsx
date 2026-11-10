export function Car() {
	const infos = {
		name: "Honda",
		model: "civic",
		price: 100000,
	};
	return (
		<div>
			<h1>
				Car Name: {infos.name}, Model: {infos.model}, Price: {infos.price}
			</h1>
		</div>
	);
}
