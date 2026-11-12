export function ParentComponent() {
    return (
        <div>
               <h1> It is the Parent </h1>
               <ChildComponent model="Ford" qty="10" />
               <ChildComponent model="BMW" qty="5" />
        </div>
     
    );
}


export function ChildComponent({model, qty}) {
    return (
        <div>
        <p> The Child: {model}, Quantity: {qty} </p>
        </div>
    );
}