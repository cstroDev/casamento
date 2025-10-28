import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio';
import NaoEncontrado from './pages/naoEncontrado'

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}