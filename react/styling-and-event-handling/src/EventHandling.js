import {useState} from 'react';
import './EventHandling.css';

function EventHandling() {
    const [functionName, setFunctionName] = useState("App");
    const [buttonText, setButtonText] = useState("");
    const [helloCounter, setHelloCounter] = useState(0);

    function welcome() {
        alert("Welcome to Event Handling in JS.");
    }

    function hello() {
        setButtonText(document.getElementById('btn').innerText);
        setHelloCounter(helloCounter + 1);
        alert("Hello to Event Handling in JS using " + functionName + "() function.")
    }

    return(
        <div className="eventHandlingBlock">
            <h1>Welcome to Event Handling Application in {functionName}() function.</h1>
            <div className='buttonBlock'>
                <button onClick={welcome}>Welcome</button>
                <button onClick={hello} id='btn'>Hello</button>
                <button onClick={() => {alert("Good Morning Folks!")}}>Greet</button>
            </div>
            <h2>{buttonText} counter: {helloCounter}</h2>
        </div>
    );
}

export default EventHandling;