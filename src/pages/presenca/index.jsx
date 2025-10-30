import './index.scss';
import {useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Presenca() {


    const [nome, setNome] = useState('');
    const [marcouOpcao, setMarcouOpcao] = useState(false);
    const [presentesDisponiveis, setPresentesDisponiveis] = useState([]);
    const [idPresenteSelecionado, setIdPresenteSelecionado] = useState(null);
    const [mensagem, setMensagem] = useState('');




    async function buscar() {
        try {
            const url = `http://localhost:5011/presente-nao-selecionado`;
            let resp = await axios.get(url);
            setPresentesDisponiveis(resp.data);
            setMensagem('');
        } catch (error) {
            setMensagem('Erro ao buscar presentes.');
        }
    }

    async function selecionarPresente(id) {
        setIdPresenteSelecionado(id);
    }

    async function confirmarPresenca() {
        setMensagem('');

        const body = {
            nome: nome,
            presente: marcouOpcao,
            id: idPresenteSelecionado
        };

        try {
            const url = `http://localhost:5011/presenca`;
            const resp = await axios.post(url, body);

            setNome('');
            setMarcouOpcao(false);
            setPresentesDisponiveis([]);
            setIdPresenteSelecionado(null);
            setMensagem('Presença confirmada com sucesso!'
                
            );
        } catch (error) {
            const erro = error.response ? error.response.data.error : 'Erro ao confirmar presença. Tente Novamente.';
            setMensagem(erro);
        }
    }

    return (
        <div className='presenca pagina'>
            <h2>Presença</h2>
            {mensagem && <div className={mensagem.includes('sucesso') ? 'mensagem-sucesso' : 'mensagem-erro'}>{mensagem}</div>}
            <div className='secao'>
                <div className='entradas'>
                    <div className='campo'>
                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='campo'>
                        <label>Presente?</label>
                        <div className='escolha'>
                            <input type="checkbox"
                                checked={marcouOpcao}
                                onChange={e => {
                                    setMarcouOpcao(e.target.checked);
                                    if (!e.target.checked) {
                                        setIdPresenteSelecionado(null);
                                        setPresentesDisponiveis([]);
                                    }
                                }}
                            />
                            {marcouOpcao ? ' Sim' : ' Não'}
                        </div>
                    </div>
                </div>
                {marcouOpcao == true && nome.length > 0 &&
                    <button onClick={buscar}>Buscar presentes</button>
                }
                {presentesDisponiveis.map(item => (
                    <div className={`card-presente ${item.id == idPresenteSelecionado ? 'selecionado' : ''}`} key={item.id}>
                        <div className=''>
                            <img src={item.foto} alt="" />
                        </div>
                        <div className='informacoes'>
                            <h3>{item.nome}</h3>
                            <Link to={item.link}>
                                <h5>Mais informacoes</h5>
                            </Link>
                        </div>
                        <div>
                            <button
                                onClick={() => selecionarPresente(item.id)}
                                disabled={item.id == idPresenteSelecionado}
                            >
                                {item.id == idPresenteSelecionado ? 'Selecionado' : 'Selecionar'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className='confirmar-presenca'
                onClick={confirmarPresenca}
                
            >
                Confirmar presença!
            </button>
        </div>
    )
}