export function MyCars() {
    const Cars = ["HONDA", "NMAX", "NWOW"];

    return (
        <div>
            <h1>My Cars: </h1>
            <ol>
                <li>
                    {Cars.map((car) => <li> I am a { car } </li>)}
                </li>
            </ol>
        </div>

    )
}