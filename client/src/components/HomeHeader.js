import React from 'react'
import { Segment, Header, Image, Divider } from 'semantic-ui-react'
import Kage from '../assets/images/KageEdit.jpg'

class HomeHeader extends React.Component {
    render() {
        return (
            <>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ display: 'flex' }}
                    vertical
                    size='huge'
                    style={{
                        backgroundImage: `url(${Kage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <Header textAlign='center' style={{ paddingTop: '8em', paddingBottom: '8em', letterSpacing: '1em', fontFamily: 'Amatic SC, cursive', fontSize: '30px' }}>Kage Hughart</Header>
                </Segment>
            </>
        )
    }
}

export default HomeHeader
