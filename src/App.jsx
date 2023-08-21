import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import styled from "styled-components";
import Advanteges from "./components/Advanteges";

function App() {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Advanteges />
      <Reviews />
      <Faq />
      <ContactForm />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
