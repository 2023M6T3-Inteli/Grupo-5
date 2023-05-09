import React from 'react'

import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import Image from 'next/image'

const MatchCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <Grid className={styles.grid}>
        <Row between='xs' middle='xs' className={styles.row}>
          <Col xs={3}>
            <Image src={'/lamp.png'} width={60} height={60} alt='Imagem de lampada' />
          </Col>
          <Col xs={6}>
            <p>
              You have 3 new projects that match with your profile!
            </p>
          </Col>
          <Col xs={3}>
            <Image src={'/next.png'} width={45} height={45} alt='Imagem de lampada' />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default MatchCard