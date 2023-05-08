import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'
import styles from './onboarding/styles.module.scss'

const Home = () => {
  return (
    <Row className={styles.container}>
      <Col xs={12} md={6} className={styles.item}>
        Item 1
      </Col>
      <Col xs={12} md={6}>
        Item 2
      </Col>
    </Row>
  )
}

export default Home