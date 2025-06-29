import CardSection from "./CardSection"

function SectionPublico(props) {
    return <section className="SectionPublico">
        <h2>{props.h2}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque enim laudantium, ea voluptatum, neque omnis deleniti, accusantium fugit sit magni ipsum ab dolor quam! Quam architecto veniam ducimus voluptatum?</p>
        <CardSection src='https://img.freepik.com/free-photo/little-girl-with-whisk_53876-15310.jpg' titulo='Para Crianças' subtitulo='Crianças de todas as idades vão se divertir muito no nosso passeio de trem.'/>
    </section>
}

export default SectionPublico