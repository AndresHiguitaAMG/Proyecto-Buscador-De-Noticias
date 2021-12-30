import { React, useState } from 'react';


const useSelect = (stateInitial, options) => {
    //State del custom hook
    const [state, actualizarState] = useState(stateInitial);
    
    const SelectNoticias = () => (
        <select className='browser-default'
        value={state}
        onChange={e => actualizarState(e.target.value)}
        >
            {options.map(el => (
                <option key={el.value} value={el.value}>{el.label}</option> 
            ))}
        </select>
    );
    return [state, SelectNoticias] 
}

export default useSelect;
