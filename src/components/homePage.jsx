import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Projects } from './Projects';
import { Footer } from './Footer';

function HomePage() {
  return (
    <div className="App">
      <Banner />
      {/* <Skills /> */}
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
