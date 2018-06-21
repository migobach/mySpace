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
import { deletePost } from '../reducers/posts'
import { getPosts } from '../reducers/posts'

class Posts extends React.Component {

	componentDidMount() {
    this.props.dispatch( getPosts() )
    debugger
	}

  posts = () => {
    return this.props.posts.map( post => 
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
    const { toggleForm } = this.state
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

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts)