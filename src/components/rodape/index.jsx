import './index.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
        <div className='comp-rodape' id='contato'>
            <div className='icones'>
                <Link to={'https://api.whatsapp.com/send?phone=5511952867448'}>
                    <img src="/assets/images/whats.jpg" alt="" />
                </Link>
                <Link>
                    <img src="/assets/images/email.jpg" alt="" />
                </Link>
                <Link to={'https://www.instagram.com/cstro.dev/profilecard/'}>
                    <img src="/assets/images/insta.jpg" alt="" />
                </Link>
            </div>
            <div className='copy'>
                ©️ 2025 — Sim, fizemos um site só pra casar mesmo.
            </div>
        </div>
    )
}