import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import { 
  Card,
  Image,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setHeaders } from '../reducers/headers'


class Home extends Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/users')
      .then( res => {
        debugger
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ friends: res.data })
      })
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
              </Card>
              )
            }
        </Card.Group>
      </Fragment>
    )
  }

  
}

export default connect()(Home);
