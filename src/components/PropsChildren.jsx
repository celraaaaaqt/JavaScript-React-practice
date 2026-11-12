export function Parent() {
	return (
		<div>
			<h1> My two Childrens: </h1>
            <Boy />
		</div>
	);
}

function Boy() {
	return (
		<div style={{ background: "blue" }}>
			<h1>This is a Boy</h1> <br />
			
		</div>
	);
}

function Girl() {
	return <div></div>;
}
