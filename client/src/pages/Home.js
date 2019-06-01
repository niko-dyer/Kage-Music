import React from 'react' 
import HomeHeader from '../components/HomeHeader'
import ShowList from '../components/ShowList'
import { Container } from 'semantic-ui-react'

const Home = () => {
    return (
        <>
            <HomeHeader />
            <Container>
                <ShowList />
            </Container>
        </>
    )
}

export default Home