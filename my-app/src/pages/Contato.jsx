export default function Contato() {
  return (
    <div className="sectionContato">
      <h2>Entre em contato conosco</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus
        mollitia rerum distinctio iure fugit praesentium architecto iste.
      </p>
      <form>
        <div className="inputField">
          <label htmlFor="inputNome">Nome:</label>
          <input name="inputNome" type="text" placeholder="Digite seu nome:" />
        </div>
        <div className="inputField">
          <label htmlFor="inputEmail">E-mail:</label>
          <input
            type="text"
            name="inputEmail"
            placeholder="Digite seu e-mail:"
          />
        </div>
        <div className="qtdPessoas">
          <label htmlFor="qtdPessoas">Quantidade de Pessoas:</label>
          <input type="range" name="qtdPessoas" id="qtdPessoas" />
        </div>
        <div className="inputField">
          <label htmlFor="textAreaObservacao">Observações</label>
          <textarea
            name="textAreaObservacao"
            id="textAreaObservacao" placeholder="Complemente com informações importantes" 
          ></textarea>
        </div>
        <input type="submit" value="Enviar" name="btnEnviar" className="btnEnviar" />
      </form>
    </div>
  );
}
