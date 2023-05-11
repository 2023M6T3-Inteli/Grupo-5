import React from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'

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
    <>
      <Header navigation={navigation} matchs={5} title='Projects' active={1} />
      <Navbar />
    </>
  )
}

export default Home