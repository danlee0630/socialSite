import React from 'react';
import Image from 'react-bootstrap/Image'
import LikeIcon from './like.png'
import Col from 'react-bootstrap/Col'

class Likes extends React.Component {

  likesClickHandler(event) {
    this.props.likeaction(this.props.postId);
  }

  render() {
    return (
      <>
      <Col>
        <Image onClick={() => this.likesClickHandler()} fluid className="mx-auto" src={LikeIcon} width="30px" alt="like logo" />
                {this.props.no}
                </Col>
      </>
    );
  }
}

export default Likes;