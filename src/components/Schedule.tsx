import  Container  from "react-bootstrap/Container";

// create a function called Schedule that returns a google calendar

function Schedule() {
  return (
    <Container fluid className="text-center">
      <iframe src="https://calendar.google.com/calendar/embed?src=cornerstonemoving%40gmail.com&ctz=America%2FNew_York" width="800" height="600" ></iframe>
    </Container>
  );
}

export default Schedule;