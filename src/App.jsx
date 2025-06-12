import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  //JSX
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
