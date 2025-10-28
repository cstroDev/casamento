import './index.scss';
import { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Mapa from '../../components/mapa';

export default function Inicio() {

  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const dataCasamento = new Date('2026-05-18T00:00:00');

    const atualizarContagem = () => {
      const agora = new Date();
      const diferenca = dataCasamento - agora;

      if (diferenca <= 0) return;

      const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000);

      setDias(diasRestantes);
      setHoras(horasRestantes);
      setMinutos(minutosRestantes);
      setSegundos(segundosRestantes);
    };

    atualizarContagem();
    const intervalo = setInterval(atualizarContagem, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="inicio">
      <Cabecalho />
      <div className='pagina' id='inicio'>
        <h1>Bem-vindo ao nosso casamento</h1>
        <p>Junte-se a nós para celebrar nosso dia especial enquanto embarcamos em</p>
        <div className='secao-cont-regressiva'>
          <h2>Contagem regressiva</h2>
          <div className='tempo'>
            <div className='conteiner-tempo'>
              <div className='background'>
                <p>{dias}</p>
              </div>
              <div>
                <p className='color'>Dias</p>
              </div>
            </div>
            <div className='conteiner-tempo'>
              <div className='background'>
                <p>{horas}</p>
              </div>
              <div>
                <p className='color'>Horas</p>
              </div>
            </div>
            <div className='conteiner-tempo'>
              <div className='background'>
                <p>{minutos}</p>
              </div>
              <div>
                <p className='color'>Minutos</p>
              </div>
            </div>
            <div className='conteiner-tempo'>
              <div className='background'>
                <p>{segundos}</p>
              </div>
              <div>
                <p className='color'>Segundos</p>
              </div>
            </div>
          </div>
        </div>
        <div className='secao-nossa-jornada'>
          <h1>Nossa Jornada</h1>
          <div className='imagens'>
            <img src="/assets/images/1.jpg" alt="" />
            <img src="/assets/images/2.jpg" alt="" />
            <img src="/assets/images/3.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio quos ipsa dolores possimus, doloribus, ea <br /> rerum vel ab suscipit nulla quod ad! Velit, voluptatibus quas placeat culpa veniam ut. Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quod sapiente aspernatur laboriosam, sequi iure numquam blanditiis repellendus <br />tempora recusandae! Ipsa sed minima natus neque debitis doloremque, adipisci hic odio expedita.</p>
        </div>
        <div className='secao-sobre-presenca' id='sobre'>
          <h1>Cerimônia e recepção de casamento</h1>
          <p>Junte-se a nós para um dia de amor e celebração enquanto trocamos votos e celebramos nossa união com você.</p>
          <div className='dataHora-local'>
            <div className='datahora'>
              <h3>Data e hora</h3>
              <p>Sábado, 18 de junho de 2026, às 16h00</p>
            </div>
            <div className='local'>
              <h3>Local</h3>
              <p>Igreja</p>
            </div>
          </div>
          <Mapa />
          <h3 style={{ textAlign: 'start', marginBottom: '10px' }}>Cronograma de Eventos</h3>
          <div className='eventos'>
            <p><span>16:00:</span> Cerimônia de casamento</p>
            <p><span>17:30:</span> Hora do coquetel</p>
            <p><span>19:00:</span> Recepçao com jantar</p>
            <p><span>21:00:</span> Festa de dança</p>
            <p><span>23:00:</span> Até a próxima</p>
          </div>
          <h3 style={{ textAlign: 'start', margin: '30px 0px 20px 0px' }}>Perguntas frequentes</h3>
          <div className='perguntas-frequentes'>
            <div>
              <h4 style={{ textAlign: 'start', marginLeft: '20px' }} >Qual é o código de vestimenta?</h4>
              <p style={{ textAlign: 'start', marginLeft: '20px' }}>Traje formal é obrigatório</p>
            </div>
            <div>
              <h4 style={{ textAlign: 'start', marginLeft: '20px' }}>Crianças são permitidas?</h4>
              <p style={{ textAlign: 'start', marginLeft: '20px' }}>Nós amamos seus filhos, mas pedimos gentilmente que não levem crianças à cerimônia e à recepção</p>
            </div>
            <div>
              <h4 style={{ textAlign: 'start', marginLeft: '20px' }}>Será fornecido transporte?</h4>
              <p style={{ textAlign: 'start', marginLeft: '20px' }}>Suas pernas</p>
            </div>
          </div>
          <h2 style={{ textAlign: 'start', marginTop: '80px' }} id='presenca'>Presença</h2>
          <button>Confirmar presença</button>
        </div>

      </div>
      <div className='rodape' id='contato'>
        <div className='icones'>
          <a href="https://api.whatsapp.com/send?phone=5511952867448"><img src="/assets/images/whats.jpg" alt="" /></a>
          <a href=""><img src="/assets/images/email.jpg" alt="" /></a>
          <a href="https://www.instagram.com/cstro.dev/profilecard/"><img src="/assets/images/insta.jpg" alt="" /></a>
        </div>
        <div className='copy'>
          ©️ 2025 — Sim, fizemos um site só pra casar mesmo. 
        </div>
      </div>
    </div>
  );
}