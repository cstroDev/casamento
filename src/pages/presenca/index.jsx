import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardPresente from '../../components/cardPresente';

export default function Presenca() {


    const [marcouOpcao, setMarcouOpcao] = useState(false);

    function buscar() {

    }

    return (
        <div className='presenca pagina'>
            <h2>Presença</h2>
            <div className='secao'>
                <div className='entradas'>
                    <div className='campo'>
                        <label>Nome:</label>
                        <input type="text" />
                    </div>
                    <div className='campo'>
                        <label>Presente?</label>
                        <div className='escolha'>
                            <input type="checkbox" checked={marcouOpcao} onChange={e => setMarcouOpcao(e.target.checked)} /> {marcouOpcao ? 'Sim' : 'Não'}
                        </div>
                    </div>
                </div>
                {marcouOpcao == true &&
                    <button onClick={buscar}>Buscar presentes</button>
                }
                <CardPresente/>
            </div>
            <button className='confirmar-presenca'>Confirmar presença!</button>
        </div>
    )
}