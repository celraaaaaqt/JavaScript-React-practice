export function Vehicle(properties) {
    return (
        <div>
            {properties.brand && <h1>My car is a {properties.brand}! - operators.jsx</h1>}
        </div>
    )
}