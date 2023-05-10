import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'

import Image from 'next/image'
import MatchCard from './components/matchCard'
import NavigationItem from './components/navigationItem'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Link from 'next/link'

type Props = {
  title?: string;
  navigation: {
    icon: string;
    text: string;
    url: string;
  }[];
  matchs?: number;
  active: number;
}

const Header: React.FC<Props> = (props: Props) => {
  const [optionsOpened, setOptionsOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const options = [
    {
      icon: '/info.png',
      text: 'FAQ',
      url: '/FAQ'
    },
    {
      icon: '/settings.png',
      text: 'Settings',
      url: '/settings'
    },
    {
      icon: darkMode ? <LightModeIcon /> : <DarkModeIcon />,
      text: darkMode ? 'Light Mode' : 'Dark Mode',
      onClick: () => setDarkMode(!darkMode)
    },
    {
      icon: '/logout.png',
      text: 'Logout',
      url: '/logout'
    },
  ]

  useEffect(() => {
    setOptionsOpened(false)
  }, [darkMode])

  return (
    <div className={styles.header}>
      <Grid>
        <Row between='xs' className={styles.row}>
          <Col>
            <Image src={'/Logo.png'} alt='Logo image' width={100} height={33} />
          </Col>
          <Col className={styles.options}>
            <Image src={'/options.png'} alt='More options' width={25} height={25} onClick={() => setOptionsOpened(!optionsOpened)} />
            {
              optionsOpened && (
                <div className={styles.select}>
                  {
                    options.map((option: any, index: number) => {
                      {
                        return option.onClick ? (
                          <div className={styles.optionContainer} key={index} onClick={() => option.onClick()}>
                            {option.icon}
                            <p>{option.text}</p>
                          </div>
                        ) : (
                          <Link className={styles.optionContainer} href={option.url} key={index}>
                            <Image src={option.icon} alt='' width={0} height={0} />
                            <p>{option.text}</p>
                          </Link>
                        )
                      }
                    })
                  }
                </div>
              )
            }
          </Col>
        </Row>

        {
          props.matchs && (
            <Row className={styles.row} middle='xs'>
              <MatchCard matchs={props.matchs} />
            </Row>
          )
        }

        {
          props.title && (
            <Row center='xs'>
              <h2 className={styles.title}>{props.title}</h2>
            </Row>
          )
        }

        <Row between='xs' center='md' middle='md'>
          {
            props.navigation.map((item: any, index: number) => {
              return (
                <Col key={index}>
                  <NavigationItem icon={item.icon} text={item.text} url={item.url} active={props.active === index} />
                </Col>
              )
            })
          }
        </Row>
      </Grid>
    </div>
  )
}

export default Header