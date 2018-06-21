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
    axios.get(`/api/users/${ id }`)
      .then( res => {
        this.setHeaders({ headers: res.headers })
        this.setState({ friend: res.data })
        // this.props.dispatch(getPosts(this.state.friend.id))
      })
      .catch( err => {
        console.log(err)
      })
      axios.get(`/api/posts/${id}`)
        .then( res => {
          this.setState({ posts: res.data })
        })
    // this.viewPosts()
    // this.props.dispatch( getPosts(this.props.match.params.friend_id) )
	}

  posts = () => {
    return this.state.posts.map( post => 
      <Card key={post.id}>
        <Card.Content>
          <Card.Description>
            {post.title}
          </Card.Description>
          <Card.Meta>
            {post.body}
          </Card.Meta>
        </Card.Content>
        {/* <Card.Content extra>
          <Button onClick={() => this.props.dispatch(deletePost(post.id))}>
            Delete
          </Button>
        </Card.Content> */}
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