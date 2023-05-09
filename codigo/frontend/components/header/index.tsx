import React from 'react'

import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'

import Image from 'next/image'
import MatchCard from './components/matchCard'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Grid>
        <Row between='xs' className={styles.row}>
          <Col>
            <Image src={'/Logo.png'} alt='Logo image' width={100} height={33} />
          </Col>
          <Col>
            <Image src={'/options.png'} alt='More options' width={25} height={25}></Image>
          </Col>
        </Row>

        <Row className={styles.row} middle='xs'>
          <MatchCard />
        </Row>
      </Grid>
    </div>
  )
}

export default Header