import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Customer = (props) => {
  const { firstName, lastName, phoneNumber, email, job, avatar } = props.data;

  const sendEmail = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const makeCall = () => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
          {job}
        </Card.Text>
        {phoneNumber && (
          <Button variant="primary" className="mx-1" onClick={makeCall}>
            Call
          </Button>
        )}
        {email && (
          <Button variant="primary" className="mx-1" onClick={sendEmail}>
            Send Email
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Customer;
