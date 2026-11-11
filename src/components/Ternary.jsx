export function Ternary() {
    const password = {
        username: "Arcel",
        password: passWord("Arcel"),
    };
    
    return (
        <div>
            <h1>{(password.username) === (password.password) ? "Access Granted" : "Access Denied" }</h1>
        </div>
    );
}

function passWord(pass) {
    const password = pass;
    return password;
}