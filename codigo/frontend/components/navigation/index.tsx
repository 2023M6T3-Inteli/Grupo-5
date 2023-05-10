import React, { useState } from 'react'

import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import Image from 'next/image'
import Link from 'next/link'

const Navigation: React.FC = () => {
  const [optionsCreateOpened, setOptionsCreateOpened] = useState(false)
  const navItems = [
    {
      icon: '/home.png',
      text: 'Contents',
      url: '/',
      alt: 'Home icon',
      width: 18,
      height: 18
    },
    {
      icon: '/rewards.png',
      text: 'Rewards',
      url: '/rewards',
      alt: 'Rewards icon',
      width: 20,
      height: 20
    },
    {
      icon: '/create.png',
      text: 'Create',
      onclick: () => setOptionsCreateOpened(true),
      alt: 'Create icon',
      width: 20,
      height: 20
    },
    {
      icon: '/projects.png',
      text: 'Projects',
      url: '/projects',
      alt: 'Projects icon',
      width: 18,
      height: 18
    },
    {
      icon: '/profile.png',
      text: 'Profile',
      url: '/profile',
      alt: 'Profile icon',
      width: 16,
      height: 18
    },
  ]

  return (
    <div className={styles.navigation}>
      <Grid className={styles.grid}>
        <Row className={styles.row} around='xs' center='xs' middle='xs'>
          {
            navItems.map((item: any, index: number) => {
              return item.onClick ? (
                <Col key={`${item.text}-${index}`} >
                  <div className={styles.item} onClick={() => item.onClick()}>
                    <Image src={item.createIcon} alt={item.alt} width={item.width} height={item.height} />
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </Col>
              ) : (
                <Col key={`${item.text}-${index}`}>
                  <Link href={item.url ? item.url : ''}>
                    <div className={styles.item} key={index}>
                      <Image src={item.icon} alt={item.alt} width={item.width} height={item.height} />
                      <p className={styles.text}>{item.text}</p>
                    </div>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Grid>
    </div>
  )
}

export default Navigation