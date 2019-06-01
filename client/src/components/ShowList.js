import React from 'react'
import axios from 'axios' 
import { Card } from 'semantic-ui-react'

class ShowList extends React.Component {
    state = {
        shows: []
    }

    componentDidMount() {
        axios
            .get('/api/shows')
            .then( res => {
                this.setState({ shows: res.data })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render() {
        const { shows } = this.state
        return (
            <>
                {shows.map( show => (
                    <Card
                        href='#card-example-link-card'
                        header={ show.name }
                        meta={ show.price }
                        description={ show.address }
                        extra={ show.date }
                  />
                ))}
            </>
        )
    }
}

export default ShowList