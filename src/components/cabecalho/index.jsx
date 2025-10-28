import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {


    return (
        <div className='comp-cabecalho'>
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre</a>
            <a href="#presenca">Presença</a>
            <a href="#contato">Contato</a>
            <div className='icone'>
                <Link to={'/entrar'}>
                    <i className='fa fa-heart'></i>
                </Link>
            </div>
        </div>
    )
}