import './index.scss';

export default function Entrar() {
    return (
        <div className='entrar pagina'>
            <div className='a'>
                <div className='entradas'>
                    <div className='campos'>
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                    </div>
                    <div className='campos'>
                        <label htmlFor="">Senha:</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}