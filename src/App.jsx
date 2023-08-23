import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import Advanteges from "./components/Advantages/Advanteges";

function App() {
  return (
    <div className="app flex flex-col">
      <Hero />
      <About />
      <Advanteges />
      <Reviews />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
