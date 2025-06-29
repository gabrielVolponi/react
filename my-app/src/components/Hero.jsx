function Hero(props) {
    return <section className="hero">
        <img src={props.src} alt="" />
        <div className="heroContainer">
            <h2>{props.h2}</h2>
            <h4>{props.h4}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas provident quo, sit voluptatibus laudantium corrupti tenetur itaque praesentium reiciendis qui magni eius fugiat neque eveniet. Et corporis sint fugit nemo?</p>
        </div>
    </section>
}

export default Hero