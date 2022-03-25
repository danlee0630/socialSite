import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import View from './View'
import Add from './Add'
import FaceTube from './FaceTube.png'
import './App.css';
import {  BrowserRouter as Router,
          Routes,
          Route,
          Link
        } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postId: undefined
    }
  }

  componentDidMount() {
    const listContents = localStorage.getItem("posts");
    let postValue = 0
    if(listContents) {
      postValue = (JSON.parse(listContents)[JSON.parse(listContents).length -1].postid) 
    }
     
    this.setState(
      { posts: JSON.parse(listContents) || [],
        postId: postValue
      }
    )
  }

  updateListItems(postid, id, text, img, likes, dislikes) {
    const postItem = { postid, id, text, img, likes, dislikes }
    this.setState((state) => ({
      posts: state.posts.concat(postItem)
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  addLike(id) {

    this.setState((state) => ({
      posts: state.posts.map(
        post => post.postid === id ? { ...post, likes: post.likes +1 } : post
      )
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  disLike(id) {

    this.setState((state) => ({
      posts: state.posts.map(
        post => post.postid === id ? { ...post, dislikes: post.dislikes +1 } : post
      )
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  render() {
    return (
      <Router>
        <Navbar bg="success" expand="md">
          <Navbar.Brand><img src={FaceTube} fluid className="mx-auto" width="100px" alt="FaceTube logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">View Post</Link>
              <Link className="nav-link" to="/add">Create Post</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/add" element={<Add onsubmit={(postid, id, text, img, likes, dislikes) => this.updateListItems(postid, id, text, img, likes, dislikes)} lastid={this.state.postId}/>
          }/>
            <Route exact path="/" element={<View posts={this.state.posts} likeaction={(id) => this.addLike(id)} dislikeaction={(id) => this.disLike(id)}/>
          }/>         
            <Route path="/" element={"Error: 404 not found"}/>
          </Routes>

        </Container>

      </Router>

    );
  }

}
export default App;
