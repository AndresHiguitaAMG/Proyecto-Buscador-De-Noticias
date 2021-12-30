import React from 'react';
import styles from './Form.module.css';
import useSelect from '../../hooks/useSelect';

const Form = ({ guardarCategoria }) => {
    const options = [
        { value: "general", label: "General" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" }, 
    ]

    //Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect("general", options);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = (e) => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra noticas por categorias</h2>
                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input 
                        type='submit'
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
