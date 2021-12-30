import React from 'react';
import Noticia from '../Noticia/Noticia';

const ListadoNoticias = ({ noticias }) => {
    return (
        <div className='row'>
            {noticias.map(el => (
                <Noticia
                key={el.url} 
                noticia={el}
                />
            ))}
        </div>
    )
}

export default ListadoNoticias;
