import './App.css';
import Hero from './components/heroSection/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Reasons from './components/reasons/Reasons.jsx'
import Plans from './components/Plans/Plans.jsx'
import Testimonial from './components/Testimonials/Testimonial.jsx'
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
