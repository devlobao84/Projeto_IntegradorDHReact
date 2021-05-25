import React from 'react';
import LoginArea from './components/CadastroLogin/CadastroLogin';
import './App.css'


export default function app() {
  return (
    <>
      <body className="body">
        <div className="container-fluid">
          <div className="row">
            <div class="col">
              <LoginArea/>
            </div>            
          </div>
        </div>
      </body>
    </>
  );
}

