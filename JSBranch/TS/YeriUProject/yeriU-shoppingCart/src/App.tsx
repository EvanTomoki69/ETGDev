import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"

function App() {
  return 
  <Container>
    <Routes>
      <Route path="Services" element={<Services/>} />
      <Route path="Designs" element={<Designs/>} />
    <Routes/>
  </Container>
}

export default App
