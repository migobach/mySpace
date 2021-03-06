import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import { 
  Card,
  Image,
  Button
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setHeaders } from '../reducers/headers'
import { updateFriend } from '../reducers/user'
import { getPosts } from '../reducers/post'
import { Link } from 'react-router-dom';
import { allUsers } from '../reducers/user'


class Home extends Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/users')
    .then( res => {
      this.props.dispatch(setHeaders(res.headers))
      this.setState({ friends: res.data })
    })
  }

  addAFriend = (id) => {
    this.props.dispatch(updateFriend(id))
  }



  render() {
    return (
      <Fragment>
          <Header as='h1' textAlign='center'>Strangers</Header>

        <Card.Group>
            { this.state.friends.map( friend =>
              <Card 
                key={friend.id}
              >
                <h2>{friend.name}</h2>
                <Image size="small" src={friend.image} />
                <h3>{friend.email}</h3>
                <Button onClick={() => this.addAFriend(friend.id)}>
                  Add Friend
                </Button>
                {/* <Button onClick={() => this.viewPosts(friend.id)}> */}

                <Link to={`/posts/${friend.id}`}>
                  <Button>
                    View Posts
                  </Button>
                </Link>
              </Card>
              )
            }
        </Card.Group>
      </Fragment>
    )
  }

  
}

export default connect()(Home);
