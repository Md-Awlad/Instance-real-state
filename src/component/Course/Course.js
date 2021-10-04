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
            <span className='service-price'>${price}</span>
          <Card.Title><span  className='course-name'>{name}</span></Card.Title>
          <Rating className='rating'
            initialRating={rating}
            emptySymbol='far fa-star'
         fullSymbol='fas fa-star'
                 readonly
                    />
          <Card.Text className='author'>
            <b>{author}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;