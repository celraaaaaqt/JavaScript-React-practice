export function Parent() {
	return (
		<div>
			<h1> My two Childrens: </h1>
			<Boy>
				<h1> Celra </h1>
			</Boy>
			<Girl>
                <h1> Nested </h1>
            </Girl>
		</div>
	);
}

function Boy({ children }) {
	return (
		<div style={{ background: "blue" }}>
			<h1>This is a Boy</h1>
			<div>{children}</div>
		</div>
	);
}

function Girl({children: child}) {
	return (
		<div style={{ background: "pink" }}>
			<h1>This is a Girl</h1>
             <div>{child}</div>
		</div>
	);
}
