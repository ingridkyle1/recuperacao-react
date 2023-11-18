//estilização
import { useState } from "react";
import "./style.css";
import api from "../../utils/api";

//hooks


//api



function CadastroBolo() {
//stter => Definir valor   
  
  const [nome, setNome ] = useState<string>("")
  const [valor, setvalor ] = useState<number>(0)
  const [imagem, setimagem ] = useState<any>("")
  const [ingredientes, setingredientes ] = useState<string>("")
  const [cobertura, setCobertura] = useState<string>("")

  function verificarCampoUpload(event: any){ 
    setimagem(event.target.files[0])

  }

  const CadastrarBolo = (event: any) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("nome", nome)
    formData.append("valor",valor.toString())
    formData.append("user_img",imagem)
    formData.append("ingredientes",ingredientes)
    formData.append("cobertura", cobertura)

    api.post("bolos", formData).then( response => {
        console.log(response)
        alert("Bolo criado com sucesso")
    }).catch(error => {
       console.log("Erro na criacao:"+ error);
    })
  }

    return (
        <main>
            <section className="cadastro">
                <div className="glass">
                    <h1>Cadastro de Bolos</h1>
                    <form method="POST"  onSubmit={ CadastrarBolo }>
                        <div>
                            <label htmlFor="nome">Nome do Bolo:</label>
                            <input
                                className="input_estilo"
                                name="nome"
                                type="text"
                                onChange={ event => setNome(event.target.value )}
                            />
                        </div>

                        <div>
                            <label htmlFor="valor">Valor do bolo:</label>
                            <input
                                className="input_estilo"
                                name="valor"
                                type="text"
                                id="valor"
                                onChange={ event => setvalor( parseFloat(event.target.value))}
                            />
                        </div>

                        <div>
                            <label htmlFor="imagem">Imagem:</label>
                            <input
                                className="input_estilo"
                                name="imagem"
                                type="file"
                                id="imagem"
                                onChange={verificarCampoUpload }

                                
                            />
                        </div>

                        <div>
                            <label htmlFor="ingredientes">Ingredientes:</label>
                            <textarea
                                className="input_estilo"
                                name="ingredientes"
                                id="ingredientes"
                                onChange={ event => setingredientes(event.target.value )}
                            >
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="cobertura">Cobertura:</label>
                            <textarea
                                className="input_estilo"
                                name="cobertura"
                                id="cobertura"
                                onChange={ event => setCobertura(event.target.value )}
                            >
                            </textarea>
                        </div>

                        <input className="btn" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CadastroBolo;