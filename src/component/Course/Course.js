import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'


const Course = (props) => {
    const {name,price,img,author,rating} = props.items
    return (
    <Col>
      <Card className='custom-cards'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='card-inners'>
            <h4 className='service-price'> ${price}</h4>
          <Card.Title> <h2 className='course-name'>{name.slice(0,47)}</h2>
          </Card.Title>
          <Rating className='rating'
            initialRating={rating}
            emptySymbol='far fa-star'
         fullSymbol='fas fa-star'
                 readonly
                    />
          <Card.Text>
            <p className='author'><b>{author}</b></p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;