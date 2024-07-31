
import Header from './components/Cabecalho'
import { Inicio } from './components/Cabecalho/styles'
import ListaVagas from './containers/ListaVagas'
import {Heroi} from './components/Hero/styles'

import './global.css'




function App() {
  return (
    <>

        <Inicio />
        <Heroi />
        <div className="container">
          <ListaVagas />
        </div>
      
    </>
  )
}

export default App
