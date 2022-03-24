import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Likes from './Likes'

class Scard extends React.Component {

  render() {
    return (
      <>
      {/* <Card border="success">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card> */}
        <Card border="success" className="mx-auto text-center mt-2" style={{ width: '30rem' }}>
          <Card.Header as="h5">@{this.props.id}</Card.Header>
          <Image fluid className="mx-auto" variant="top" src={this.props.img} alt={this.props.alt} />
          <Card.Body>
            <Card.Text>{this.props.text}</Card.Text>
            <Likes no={this.props.likes} likeaction={this.props.likeaction} postId={this.props.postId} />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Scard;