import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Divider } from 'semantic-ui-react'
import axios from 'axios'
import { setHeaders } from '../reducers/headers'

class MyFriends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    const { dispatch } = this.props
    axios.get('/api/my_friends')
      .then( ({ data, headers }) => {
        dispatch(setHeaders(headers))
        this.setState({ friends: data })
      })
  }

  render() {
    const { friends } = this.state
    return (
      <Card.Group itemsPerRow={3}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Card.Content>
              <Image src={friend.image} />
              <Divider />
              <Card.Header>
                {friend.name}
              </Card.Header>
            </Card.Content>
          </Card>
        )
       }
      </Card.Group>
    )
  }

}

export default connect()(MyFriends)