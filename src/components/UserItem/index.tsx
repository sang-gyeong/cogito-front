import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserItem({user}: {user: User}) {
  console.log(user);
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={user.profileImgUrl} />
      <span>
        <Badge bg="secondary">{user.nickname}</Badge>
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
