import './index.scss';
import { Link } from 'react-router-dom';

export default function CardPresente() {

    return (
        <div className='card-presente'>
            <div className=''>
                <img src="https://electrolux.vtexassets.com/arquivos/ids/228136-500-500?v=638856444061070000&width=500&height=500&aspect=true&format=auto" alt="" />
            </div>
            <div className='informacoes'>
                <h3>Geladeira</h3>
                <Link to={'https://loja.electrolux.com.br/geladeira-electrolux-frost-free-duplex-efficient-com-autosense-cor-black-inox-look-390l--if43b-/p'}>
                    <h5>Mais informacoes</h5>
                </Link>
            </div>
            <div>
                <button>Selecionar</button>
            </div>
        </div>
    )
}