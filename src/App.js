import { React, Fragment, useState, useEffect } from 'react'
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ListadoNoticias from './components/ListadoDeNoticias/ListadoNoticias';

function App() {
  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=41849093f2c04f9782696c9c26d2e547`;
      const response = await fetch(url);
      const noticias = await response.json();
      guardarNoticas(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
      title='Buscador de noticias'
      />

      <div className='container white'>
        <Form 
        guardarCategoria={guardarCategoria}
        />
      </div>

      <ListadoNoticias 
      noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
