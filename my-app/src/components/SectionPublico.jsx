import CardSection from "./CardSection"

function SectionPublico(props) {
    return <section className="SectionPublico">
        <h2>{props.h2}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque enim laudantium, ea voluptatum, neque omnis deleniti, accusantium fugit sit magni ipsum ab dolor quam! Quam architecto veniam ducimus voluptatum?</p>
        <div className="cards">
            <CardSection src='https://img.freepik.com/free-photo/little-girl-with-whisk_53876-15310.jpg' titulo='Para Crianças' subtitulo='Crianças de todas as idades vão se divertir muito no nosso passeio de trem.'/>
            <CardSection src='https://plus.unsplash.com/premium_photo-1731430624981-6c0adb87e759?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' titulo='Para Adultos' subtitulo='Traga seus amigos e familía para conhecer e se divertir com nosso passeio de trem.'/>
            <CardSection src='https://plus.unsplash.com/premium_photo-1706803193174-25d9644c6451?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' titulo='Para Casais' subtitulo='Um lugar extremamente romântico para trazer o mozão e criar novas experiências'/>
        </div>
    </section>
}

export default SectionPublico