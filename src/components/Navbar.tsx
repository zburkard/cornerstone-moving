import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EmailForm from './EmailForm.tsx'

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="row justify-content-space-between">
<div className="col-4">
        <img src="/src/assets/cornerstone.png" alt="Cornerstone" width="50%" height="100%" />
      </div>
      <div className="col-8 d-flex align-items-center justify-content-end">
        <Button variant="success" onClick={handleShow} className="m-3 p-3">
        <h5>Book With Us Today!</h5>
      </Button>
      </div>
    </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tell us a little about your move!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailForm/>
          </Modal.Body>
      </Modal>
    </>
  );
}


export default NavBar;