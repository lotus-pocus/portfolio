import background from "../image/background.png"

function Landing() {
    return (
        <div style={{backgroundImage:`url(${background})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover",
        height:1200
         }}>
        
            <h1 style={{color:"blueviolet"}}>for the love of design</h1>
            <br></br>
            <p>Creating responsive and unique webpages.
            </p>
        </div>
    );
}

export default Landing