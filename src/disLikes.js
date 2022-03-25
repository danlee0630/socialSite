import React from 'react';
import Image from 'react-bootstrap/Image'
import DislikeIcon from './dislike.png'
import Col from 'react-bootstrap/Col'

class Dislikes extends React.Component {

  dislikesClickHandler(event) {
    this.props.dislikeaction(this.props.postId);
  }

  render() {
    return (
      <>
      <Col>
        <Image onClick={() => this.dislikesClickHandler()} fluid className="mx-auto" src={DislikeIcon} width="30px" alt="dislike logo" />
        {this.props.no}
        </Col>
      </>
    );
  }
}

export default Dislikes;