import React from 'react';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import DislikeIcon from './dislike.png'

class Dislikes extends React.Component {

  dislikesClickHandler(event) {
    this.props.dislikeaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Image onClick={() => this.dislikesClickHandler()} fluid className="mx-auto" src={DislikeIcon} width="30px" alt="dislike logo" />
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

export default Dislikes;