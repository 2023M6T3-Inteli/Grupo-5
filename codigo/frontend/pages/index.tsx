import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'
import styles from './onboarding/styles.module.scss'
import Header from '@/components/header'

const Home = () => {
  const navigation = [
    {
      icon: '/burguer.png',
      text: 'All Posts',
      url: '/allPosts'
    },
    {
      icon: '/star.png',
      text: 'Recommended',
      url: '/recommended'
    },
    {
      icon: '/community.png',
      text: 'Community',
      url: '/community'
    }
  ]

  return (
    <Header navigation={navigation} matchs={5} title='Projects' active={1}/>
  )
}

export default Home