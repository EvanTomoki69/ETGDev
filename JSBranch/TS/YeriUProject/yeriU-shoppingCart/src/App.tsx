import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Designs } from "./pages/Designs"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/designs" element={<Designs />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
