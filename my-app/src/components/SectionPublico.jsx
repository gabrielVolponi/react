import CardSection from "./CardSection"

function SectionPublico(props) {
    return <section className="SectionPublico">
        <h2>{props.h2}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque enim laudantium, ea voluptatum, neque omnis deleniti, accusantium fugit sit magni ipsum ab dolor quam! Quam architecto veniam ducimus voluptatum?</p>
        <div className="cards">
            <CardSection src='https://img.freepik.com/free-photo/little-girl-with-whisk_53876-15310.jpg' titulo='Para Crianças' subtitulo='Crianças de todas as idades vão se divertir muito no nosso passeio de trem.'/>
            <CardSection src='https://img.freepik.com/free-photo/little-girl-with-whisk_53876-15310.jpg' titulo='Para Adultos' subtitulo='Traga seus amigos e familía para conhecer e se divertir com nosso passeio de trem.'/>
            <CardSection src='https://img.freepik.com/free-photo/little-girl-with-whisk_53876-15310.jpg' titulo='Para Casais' subtitulo='Um lugar extremamente romântico para trazer o mozão e criar novas experiências'/>
        </div>
    </section>
}

export default SectionPublico