import background from "../image/background.png"

function Landing() {
    return (
        <div style={{backgroundImage:`url(${background})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover",
        height:1200
         }}>
        
            <h2 className="tagline">for the love of design</h2>
            <br></br>
            <p className="smallprint">Creating responsive and unique webpages.</p>
            <h1 className="introduction">Hi, I am Lotus</h1>
            <p className="subtitle">/web developer/</p>
        </div>
    );
}

export default Landing