export function Goal(props) {
    const isGoal = props.isGoal;

    if(isGoal) {
        return <MadeGoal />
    }
        return <MissedGoal />
}

export function Goal2({isGoal}) {
    return isGoal ? <MadeGoal /> : <MissedGoal />;
}
function MissedGoal() {
    return <h1>MISSED!</h1>
}

function MadeGoal() {
    return <h1>Goal!</h1>
}

//? Use props when accessing multiple properties through the object
//? Or use destructuring when you only need individual properties