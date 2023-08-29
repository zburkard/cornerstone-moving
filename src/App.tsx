import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/Schedule';
import ContactUs from './components/EmailForm';

function App() {

  return (
    <>
      <NavBar />
      <div className='text-center bg-primary'>
        <img src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/02/The-Best-Long-Distance-Moving-Companies-Options.jpg" height='60%' alt="" />
      </div>
        <Schedule />
        <ContactUs />
        
    </>
  )
}

export default App
