import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/customer/Contact'
import About from './pages/customer/Player'
import CustomerLayout from './shared/layouts/CustomerLayout'
import Player from './pages/customer/Player'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}
        <Route path='/' element={<CustomerLayout />}>
          <Route path="player" element={<Player />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
