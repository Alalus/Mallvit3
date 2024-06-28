
export default function MallHeader({mall}){
    return (
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <picture>
                        <img src={mall.src} alt={mall.name} />
                    </picture>
                </div>
                <div className="hero-text">
                <h1 className="hero-heading">{mall.name}</h1>
                <p className="hero-description">Welcome to the mall</p>
                <a href="#about" className="hero-button">Learn More</a>
                </div>
            </div>
        </div>
    )
}