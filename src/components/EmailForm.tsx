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
    <Container fluid>
     <form ref={form} onSubmit={sendEmail}>
          <label className='p-2'>Name:</label>
          <input type="text" name="user_name" className='col-8' />
      <label className="p-2">Phone Number:</label>
      <input type="tel" maxLength={10} name="phone_number" className='col-8'/>
      <label className='p-2'>Email:</label>
      <input type="email" name="user_email" className='col-8'/>
      <label className="p-2">Day and Time of Move</label>
      <input type="datetime-local" name="date" />
      <label className="p-2">Anything additional you would like us to know:</label>
      <textarea name="message" placeholder='Enter your message here...' className='col-8'/>
      <input className="btn btn-success rounded col-12 mt-3" type="submit" value="Send" />
     </form>
     </Container>
  );
};

export default ContactUs;