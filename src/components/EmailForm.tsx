import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txyze3i', 'template_yj9hz2p', form.current, '6Ra9ujlmQgY3K4VN5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container fluid className='mt-4'>
      <div className='row justify-content-center'>
        <div className='col-6 bg-light rounded'>
     <form ref={form} onSubmit={sendEmail}>
      <div className="row justify-content-center">
        <div className='col-3'>
          <label className='p-2'>Name:</label>
          <input type="text" name="user_name" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className='col-3'>
      <label className="p-2">Phone Number:</label>
      <input type="tel" maxLength={10} name="phone_number" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className='col-3'>
      <label className='p-2'>Email:</label>
      <input type="email" name="user_email" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className='col-3'>
      <label className="p-2">Day and Time you would like us to help with your move:</label>
      <input type="datetime-local" name="date" />
          </div>
        </div>
      <div className="row justify-content-center mt-1">
        <div className='col-3 d-flex align-items-center'>
      <label className="p-2">Anything additional you would like us to know:</label>
      <textarea name="message" placeholder='Enter your message here...' />
      </div>
      </div>
      <div className="row text-center">
        <div className='col-12 p-3'>
      <input className="bg-primary rounded" type="submit" value="Send" />
      </div>
      </div>
     </form>
     </div>
     </div>
     </Container>
  );
};

export default ContactUs;