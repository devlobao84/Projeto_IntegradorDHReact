import React from 'react';
import './CadastroLogin.css'
import image from '../CadastroLogin/imagens/ilustracao.svg'


export default function CadastroLogin() {
  return (
    <div>
    <div className="titulo">
      <h1>Seja bem-vindo!</h1> <br></br>
      <p className="text-welcome"> Antes de tudo, efetue seu login. <br></br>
      Caso você ainda não possua um cadastro, pode criar um!</p>
      <img classname="ilustracao" src={image} alt={"imagem"}></img>
    </div>

      

      <div className = "mainDiv">
        <form className = "form-main">
          <div className = "row">
            <div className = "col">
            <small id = "passwordHelpBlock" className = "form-text text-muted descricao" >Nome</small>
            <input type = "text" name = "nome" className = "form-control input-menor" placeholder = "Nome"></input>
          </div>        
          <div className = "col">
            <small id = "passwordHelpBlock" className = "form-text text-muted descricao">Sobrenome</small>
            <input type = "text" name = "sobrenome" className = "form-control input-menor" placeholder = "Sobrenome"></input>
          </div>        
        </div>
        <small id = "passwordHelpBlock" className = "form-text text-muted descricao">Endereço de e - mail</small>
        <input type = "email" name = "email" d = "inputPassword5"className = "form-control input-email" aria-describedby = "passwordHelpBlock"></input>
        <small id = "passwordHelpBlock" className = "form-text text-muted descricao">Senha</small>
        <input type = "password" name = "senha" id = "inputPassword5" class = "form-control input-senha" aria-describedby = "passwordHelpBlock"></input>
        <small id = "passwordHelpBlock" className = "form-text text-muted descricao">Confirmar senha</small>
        <input type = "password" id = "inputPassword5" className = "form-control input-comfirmar-senha"aria-describedby = "passwordHelpBlock"></input>
        <button type = "submit" className = "btn btn-warning button-create">Criar nova conta</button>
        <button type = "text" className = "btn btn-warning button-account" text-decoration = 'none'><a href = "/login"> á tenho conta</a>
        </button>
        </form>
      </div>

      </div>
        
    
  )

}
