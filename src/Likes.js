import React from 'react';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import LikeIcon from './like.png'

class Likes extends React.Component {

  likesClickHandler(event) {
    this.props.likeaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Image onClick={() => this.likesClickHandler()} fluid className="mx-auto" src={LikeIcon} width="30px" alt="like logo" />
              </td>
              <td>
                {this.props.no}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Likes;