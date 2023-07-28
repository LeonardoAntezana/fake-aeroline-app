import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/_globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

// AGREGAR EL REACT.STRICT MODE AL FINALIZAR EL PROYECTO, POR TEMAS DE SEGURIDAD Y BUENAS PRACTICAS