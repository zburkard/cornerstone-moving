import  Container  from "react-bootstrap/Container";

function Schedule() {
  return (
    <Container fluid className="text-center">
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBoise&showDate=1&showPrint=0&src=Y29ybmVyc3RvbmVtb3ZpbmdAZ21haWwuY29t&src=OWE3ZDM4NjhkMjc3NmE1NjdhZGUwYjYxNzViZjkwZTY2OTQ3MTQ3YjA4MzU2YmRlYjBlNDc2YzA5ZWY3NzA5OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dnYxM2RzcTNhdTE0aTBhbzlpajQxdDQ4MmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmluYWhvbWVkZXNpZ25AZ21haWwuY29t&color=%23039BE5&color=%2333B679&color=%23E4C441&color=%23F09300"  width="800" height="600" className="rounded"></iframe>
    </Container>
  );
}

export default Schedule;