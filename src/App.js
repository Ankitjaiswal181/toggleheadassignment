import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import SectionFour from './component/SectionFour';
import timer from './Image/timer.png'
import train from './Image/train.png'
import map from './Image/map.png'
import footer from './Image/footer.png' 

function App() {
  return (
    <div className="App">
      <section id='header-section'>
      <header className="header">
        <Navbar/>
      </header>
      <main>
        <section className='section-one'>
          <SectionOne/>
        </section>
        <section className='section-two'>
          <SectionTwo/>
        </section>
        <section className='section-three'>
          <SectionThree/>
        </section>
        <section className='section-four'>
          <SectionFour/>
        </section>
      </main>
      <footer>
        <div className='container'>
          <div className='footer__top'>
          
            <div className='contact'> 
              <h2>Contact us</h2>
              <p>Address: amet, consetetur sadipscing elitr, sed diam<br/> Email id: eirmod tempor invidunt ut labore et dolore<br/> Phone no: 123456789</p>
            </div>
            <div className='social-media'>
              <h2>Follow us</h2>
              <ul>
                <li><a href="#" className="fa fa-facebook"></a></li>
                <li><a href="#" className="fa fa-linkedin"></a></li>
                <li><a href="#" className="fa fa-instagram"></a></li>
                <li><a href="#" className="fa fa-twitter"></a></li>
                <li><a href="#" className="fa fa-youtube"></a></li>
                <li><a href="#" className="fa fa-quora"></a></li>
              </ul>
            </div>
            <div className='address'>
              <h2>Head Office</h2>
                <ul>
                  <li><img src={map} alt='timerIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                  <li><img src={timer} alt='timerIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                  <li><img src={timer} alt='timerIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                  <li><img src={train} alt='timerIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                </ul>
            </div>
          </div>
          <div className='footer__bottom'>
            <p> © 2021 All Rights Reserved. Privacy Policy </p>

          </div>
        </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
