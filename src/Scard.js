import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Likes from './Likes'
import Dislikes from './disLikes';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Scard extends React.Component {

  render() {
    return (
      <>
      {/* This is for the Card display format */}
        <Card border="success" className="mx-2 text-left mt-2" style={{ width: "450px" }}>
          <Card.Header as="h5">@{this.props.id}</Card.Header>
          <Image fluid className="mx-auto" src={this.props.img} width="400px" alt={this.props.alt} />
          <Card.Body>
            <Card.Text>{this.props.text}</Card.Text>
        <Row xs="auto">
        <Likes no={this.props.likes} likeaction={this.props.likeaction} postId={this.props.postId} />
        <Dislikes no={this.props.dislikes} dislikeaction={this.props.dislikeaction} postId={this.props.postId} />
        <Col></Col>
        <Col></Col>
        <Col></Col>
        </Row>
          </Card.Body>
        </Card>


      </>
    );
  }
}

export default Scard;