import './welcome.css';

function welcome() {
    let day = new Date().getDay();
    let date = new Date().toLocaleDateString();
    let welcomeMessage = "";
    switch(0) {
        case 0: welcomeMessage = "New week, new goals. Let\’s get started!";
                break;
        case 1: welcomeMessage = "Keep the momentum going. You\’ve got this!";
                break;
        case 2: welcomeMessage = "Halfway there! Keep pushing forward."
                break;
        case 3: welcomeMessage = "Almost there. Finish strong!"
                break;
        case 4: welcomeMessage = "Wrap up the week with pride!"
                break;
        case 5: welcomeMessage = "Recharge and enjoy your day!"
                break;
        case 6: welcomeMessage = "Rest up. Ready for the week ahead."
                break;        
    }
    return (
        <div class="welcomeStrip">
            <p class="left">{date}</p>
            <h3>React</h3>
            <p class="right">{welcomeMessage}</p>
        </div>
    );

}

export default welcome;