import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./constants/public.routes.ts"

const Home = lazy(() => import('./pages/Home/Home.tsx'))
const Login = lazy(() => import('./pages/Login/Login.tsx'))

function App() {

  return (
    <Suspense fallback='Cargando'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path={publicRoutes.LOGIN} Component={Login} />
          <Route path={privateRoutes.HOME} Component={Home} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
