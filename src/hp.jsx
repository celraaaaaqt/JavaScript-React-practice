function healHp(heal) {
    return heal + 10;
}

export function MyElements() {
	const p = 100 - 50;

	return (
		<div>
			<h1>Hp is less than {p + healHp(10)}.</h1>
		</div>
	);
}