function CardSection(props) {
    <div className="cardSection">
        <img src={props.src} alt={props.titulo} />
        <div className="cardSectionText">
            <h4>{props.titulo}</h4>
            <p>{props.subtitulo}</p>
            <a href="#">Saiba Mais</a>
        </div>
    </div>
}

export default CardSection