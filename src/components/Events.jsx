export function Football() {
    const shootStyle = {
        backgroundColor: "navy",
        color: "white",
        fontSize: "50px",
        borderRadius: "20px",
        outline: "none",
        padding: "10px",
    }

    const shoot = (a) => {
        alert(a);
    }

    return (
        <div>
             <button type="button" onClick={() => shoot("Goal!")} style={shootStyle}>Take the shot!</button>
        </div>
           
    );
}