import React from 'react'
import CardsFirst from '../components/CardsFirst'
import '../App.css'
import CardsSecond from '../components/CardsSecond'
import { Col, Row } from 'react-bootstrap'
import ToggleBtn from '../components/ToggleBtn'

function Home() {
    return (
        <div>
            <div>

                <Row>
                    <h3 className='home-title ps-4 pt-4 pb-2 mt-2'>Choose a plan that's just right for you !</h3>
                    <Col lg={8} md={6} sm={6}></Col>
                    <Col className='t-btn' lg={4} md={6} sm={6}>
                        <ToggleBtn />
                    </Col>
                </Row>

                <CardsFirst />
                <CardsSecond />
                
            </div>
        </div>

    )
}

export default Home