import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Thank from './components/Thankyou/Index'
import Home from './Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/thanks" element={<Thank />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
