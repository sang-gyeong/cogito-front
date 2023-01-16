import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TagItem({tag}: {tag: Tag}) {
  return (
    <Card style={{width: '18rem'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <span>
        <Badge bg="secondary">{tag.name}</Badge>
      </span>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}