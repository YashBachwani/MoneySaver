
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Simulator from './pages/Simulator'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative overflow-x-clip bg-background">
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<Simulator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
