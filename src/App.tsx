import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes, params } from "./constants/routes.ts"
import { Navbar } from "./components"

const Home = lazy(() => import('./pages/Home/Home.tsx'))
const Login = lazy(() => import('./pages/Login/Login.tsx'))

function App() {

  return (
    <Suspense fallback='Cargando'>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path={publicRoutes.LOGIN} Component={Login} />
          <Route path={privateRoutes.HOME} Component={Home} />
          <Route path={`/${privateRoutes.DESTINATIONS}/${params.DESTINO}`} Component={Home} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
