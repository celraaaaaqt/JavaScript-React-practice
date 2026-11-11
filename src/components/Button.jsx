export function Button() {
	const buttonStyle = {
		color: "red",
		fontSize: "30px",
		backgroundColor: "navy",
	};

	const alertButton = () => {
		alert("Arcel Pogi");
	};

	return (
		<div>
			<button type="button" style={buttonStyle} onClick={alertButton}>
				Click me Bro
			</button>
		</div>
	);
}
