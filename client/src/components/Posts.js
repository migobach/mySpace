import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Card,
  Button,
  Divider,
} from 'semantic-ui-react'
import { deletePost } from '../reducers/post'
import { getPosts } from '../reducers/post'
import axios from 'axios'
import { setHeaders } from '../reducers/headers'

class Posts extends React.Component {
  state = { friend: '', posts: [] }

  viewPosts = (id) => {
  }
  
	componentDidMount() {
    const id = this.props.match.params.id
    this.setState({ friend: id })
    // axios.get(`/api/users/${ id }`)
    //   .then( res => {
    //     this.setHeaders({ headers: res.headers })
    //     this.setState({ friend: res.data })
    //     // this.props.dispatch(getPosts(this.state.friend.id))
    //   })
    //   .catch( err => {
    //     console.log(err)
    //   })
      debugger
      axios.get(`/api/posts/${id}`)
        .then( res => {
          this.setState({ posts: res.data })
        })
        .catch( err => {
          console.log(err) 
        })
        debugger
    // this.viewPosts()
    // this.props.dispatch( getPosts(this.props.match.params.friend_id) )
  }
  
  // get the posts to be filtered - maybe set a variable or state and then pass that into the render function with a filter on it. 
  
  posts = () => {
    debugger
    // return this.state.posts.map( post => 
    return this.state.posts.filter(p => p.user_id == this.state.friend).map( post => 
      <Card key={post.id}>
        <Card.Content>
          <Card.Description>
            {post.title}
          </Card.Description>
          <Card.Meta>
            {post.body}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => this.props.dispatch(deletePost(post.id))}>
            Delete
          </Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    // const { toggleForm } = this.state
    return (
      <Container>
        <Header>Posts</Header>
        <Card.Group itemsPerRow={3}>
          { this.posts() }
        </Card.Group>
      </Container>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   return { 
//     posts: state.posts,
//     // friend: state.users.find(f => f.id === props.match.params.id)
//    }
// }

export default connect()(Posts)