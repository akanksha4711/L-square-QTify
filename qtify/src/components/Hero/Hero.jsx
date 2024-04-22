import "./Hero.css";

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero-text">
                <span>100 Thousand Songs, ad-free</span>
                <span>Over thousand podcast episodes</span>
            </div>
            <img className="hero-img" src={require("../../assets/hero_headphones.png")} alt="hero-logo"></img>
        </div>
    )
}