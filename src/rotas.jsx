import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio';
import Entrar from './pages/entrar';
import NaoEncontrado from './pages/naoEncontrado';
import Presenca from './pages/presenca';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/entrar' element={<Entrar />} />
                <Route path='/presenca' element={<Presenca />} />

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}