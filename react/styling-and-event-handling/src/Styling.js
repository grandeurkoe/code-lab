function Styling() {
    let userStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "large",
        fontWeight: "600",
        border: "2px solid blueviolet"
    }

    return (
        <div className="stylingBlock" style={{backgroundColor: "greenyellow"}}>
            <h1>Welcome to Styling!</h1>
            <div className="userBlock" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p style={userStyle}>Vishal Kuswaha</p>
                <p style={userStyle}>Meena Devi</p>
                <p style={userStyle}>Shriram Kushwaha</p>
            </div>
        </div>
    );

}

export default Styling;