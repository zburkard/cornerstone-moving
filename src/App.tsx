import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/Schedule';
// import ContactUs from './components/EmailForm';
import AboutUs from './components/About';
import  Container  from 'react-bootstrap/Container';
import './index.css'

function App() {

  return (
    <>
    <div className='sticky-top'>
       <NavBar />
    </div>
      <Container fluid>
        <AboutUs />
        <Schedule />
        {/* <ContactUs /> */}
        <div className='row mt-5'></div>
        </Container>
    </>
  )
}

export default App
